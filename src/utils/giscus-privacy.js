const LYRICAL_SYNC_PRIVACY_SLUGS = new Set([
	"lyrical-sync-privacy-policy",
	"lyrical-sync-privacy-policy-en",
	"lyrical-sync-privacy-policy-ja",
]);

export function isLyricalSyncPrivacySlug(slug) {
	return LYRICAL_SYNC_PRIVACY_SLUGS.has(slug);
}

export function isLyricalSyncPrivacyPath(pathname) {
	const path = new URL(pathname, "https://ahri2nd.xyz").pathname.replace(
		/\/+$/,
		"",
	);
	const match = path.match(/^\/posts\/([^/]+)$/);
	return match ? isLyricalSyncPrivacySlug(match[1]) : false;
}

export function installGiscusPrivacyCleanup(swup, root = document) {
	return swup.hooks.on("visit:start", (visit) => {
		const target = new URL(visit.to.url, root.location.origin).pathname;
		if (!isLyricalSyncPrivacyPath(target)) return;

		root.querySelectorAll(".giscus").forEach((widget) => {
			widget
				.querySelectorAll(
					'script[src*="giscus.app"], iframe.giscus-frame',
				)
				.forEach((element) => element.remove());
		});
	});
}
