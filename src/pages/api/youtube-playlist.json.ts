import type { APIRoute } from "astro";

// 빌드타임에 YouTube 플레이리스트 RSS를 가져와 정적 JSON으로 굽는다.
// API 키 불필요. RSS는 최근 15개 영상만 제공한다.
const PLAYLIST_ID = "PLI8v8TR0VO8l0CoLeN6S5h98gXB3hsOyp";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;

interface Video {
	videoId: string;
	title: string;
	thumbnail: string;
}

function decodeXmlEntities(str: string): string {
	return str
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&#x27;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
			String.fromCodePoint(Number.parseInt(n, 16)),
		)
		.replace(/&amp;/g, "&");
}

function parseFeed(xml: string): Video[] {
	const videos: Video[] = [];
	const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
	let match: RegExpExecArray | null;
	// biome-ignore lint/suspicious/noAssignInExpressions: 정규식 순회 관용구
	while ((match = entryRegex.exec(xml)) !== null) {
		const entry = match[1];
		const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
		const rawTitle = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
		const thumbnail = entry.match(
			/<media:thumbnail\s+url="(.*?)"/,
		)?.[1];
		if (!videoId) continue;
		videos.push({
			videoId,
			title: rawTitle ? decodeXmlEntities(rawTitle.trim()) : "(제목 없음)",
			thumbnail: thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
		});
	}
	return videos;
}

export const GET: APIRoute = async () => {
	let videos: Video[] = [];
	try {
		const res = await fetch(FEED_URL);
		if (res.ok) {
			const xml = await res.text();
			videos = parseFeed(xml);
		}
	} catch {
		// 빌드 중 네트워크 실패 시 빈 목록으로 폴백 → 클라이언트가 안내 문구 표시
		videos = [];
	}

	return new Response(
		JSON.stringify({ playlistId: PLAYLIST_ID, videos }),
		{
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		},
	);
};
