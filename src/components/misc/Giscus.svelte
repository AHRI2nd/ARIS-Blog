<script lang="ts">
import { giscusConfig } from "src/config";
import { installGiscusPrivacyCleanup } from "@utils/giscus-privacy.js";
import { onDestroy, onMount } from "svelte";

let container: HTMLDivElement;
let observer: MutationObserver;
let script: HTMLScriptElement | undefined;
let unregisterPrivacyCleanup: (() => void) | undefined;

function registerPrivacyCleanup() {
	if (unregisterPrivacyCleanup) return;
	const swup = (window as unknown as {
		swup?: {
			hooks?: {
				on: (
					name: "visit:start",
					handler: (visit: { to: { url: string } }) => void,
				) => () => void;
			};
		}
	}).swup;
	if (swup?.hooks) {
		unregisterPrivacyCleanup = installGiscusPrivacyCleanup(swup, document);
	}
}

function getTheme(): string {
	const isDark = document.documentElement.classList.contains("dark");
	return isDark
		? (giscusConfig.darkTheme ?? "dark_dimmed")
		: (giscusConfig.lightTheme ?? "light");
}

function sendThemeMessage(theme: string) {
	const iframe = document.querySelector<HTMLIFrameElement>(
		"iframe.giscus-frame",
	);
	iframe?.contentWindow?.postMessage(
		{ giscus: { setConfig: { theme } } },
		"https://giscus.app",
	);
}

onMount(() => {
	script = document.createElement("script");
	script.src = "https://giscus.app/client.js";
	script.setAttribute("data-repo", giscusConfig.repo);
	script.setAttribute("data-repo-id", giscusConfig.repoId);
	script.setAttribute("data-category", giscusConfig.category);
	script.setAttribute("data-category-id", giscusConfig.categoryId);
	script.setAttribute("data-mapping", giscusConfig.mapping ?? "pathname");
	script.setAttribute("data-strict", "0");
	script.setAttribute(
		"data-reactions-enabled",
		giscusConfig.reactionsEnabled !== false ? "1" : "0",
	);
	script.setAttribute("data-emit-metadata", "0");
	script.setAttribute(
		"data-input-position",
		giscusConfig.inputPosition ?? "top",
	);
	script.setAttribute("data-theme", getTheme());
	script.setAttribute("data-lang", giscusConfig.lang ?? "ko");
	script.setAttribute("data-loading", "lazy");
	script.crossOrigin = "anonymous";
	script.async = true;
	container.appendChild(script);

	observer = new MutationObserver(() => sendThemeMessage(getTheme()));
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});

	registerPrivacyCleanup();
	document.addEventListener("swup:enable", registerPrivacyCleanup);
});

onDestroy(() => {
	observer?.disconnect();
	if (typeof document === "undefined") return;
	document.removeEventListener("swup:enable", registerPrivacyCleanup);
	unregisterPrivacyCleanup?.();
	script?.remove();
	container?.querySelectorAll("iframe.giscus-frame, script[src*='giscus.app']").forEach((element) => element.remove());
});
</script>

<div bind:this={container} class="giscus mt-6"></div>
