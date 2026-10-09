import assert from "node:assert/strict";
import test from "node:test";
import {
	installGiscusPrivacyCleanup,
	isLyricalSyncPrivacyPath,
	isLyricalSyncPrivacySlug,
} from "./giscus-privacy.js";

test("matches only the three Lyrical Sync privacy policy routes", () => {
	assert.equal(
		isLyricalSyncPrivacyPath("/posts/lyrical-sync-privacy-policy/"),
		true,
	);
	assert.equal(
		isLyricalSyncPrivacyPath("/posts/lyrical-sync-privacy-policy-en/"),
		true,
	);
	assert.equal(
		isLyricalSyncPrivacyPath("/posts/lyrical-sync-privacy-policy-ja/"),
		true,
	);
	assert.equal(isLyricalSyncPrivacyPath("/posts/lyrical-sync-intro/"), false);
	assert.equal(
		isLyricalSyncPrivacyPath("/posts/lyrical-sync-privacy-policy-extra/"),
		false,
	);
	assert.equal(isLyricalSyncPrivacySlug("lyrical-sync-privacy-policy-en"), true);
	assert.equal(isLyricalSyncPrivacySlug("lyrical-sync-intro"), false);
});

test("removes the current Giscus script and iframe before entering a policy route", () => {
	let visitStart;
	const removed = [];
	const giscusElements = [
		{ remove: () => removed.push("script") },
		{ remove: () => removed.push("iframe") },
	];
	const root = {
		location: { origin: "https://ahri2nd.xyz" },
		querySelectorAll: (selector) => {
			assert.equal(selector, ".giscus");
			return [
				{
					querySelectorAll: (nestedSelector) => {
						assert.match(nestedSelector, /script/);
						assert.match(nestedSelector, /iframe/);
						return giscusElements;
					},
				},
			];
		},
	};
	const swup = {
		hooks: {
			on: (name, handler) => {
				assert.equal(name, "visit:start");
				visitStart = handler;
				return () => {
					visitStart = undefined;
				};
			},
		},
	};

	const unregister = installGiscusPrivacyCleanup(swup, root);
	visitStart({ to: { url: "/posts/lyrical-sync-intro/" } });
	assert.deepEqual(removed, []);

	visitStart({ to: { url: "/posts/lyrical-sync-privacy-policy-en/" } });
	assert.deepEqual(removed, ["script", "iframe"]);

	unregister();
	assert.equal(visitStart, undefined);
});
