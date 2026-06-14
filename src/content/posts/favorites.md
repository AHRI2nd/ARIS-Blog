---
title: Favorites
published: 2025-10-24
description: My favorites
tags: [information, music]
category: Music
---

## Link

- [Spotify](https://open.spotify.com/user/vrzp923oitpudxzpcglk8pa40?si=594c21ea131a4094)
- [Stats.fm](https://stats.fm/ahri2nd)
- [Musixmatch](https://www.musixmatch.com/profile/3vUCAArqF_yLicK4gElNQSbkBTop-eOR_Bp0eVR84VSKFn7LCe8P3FFlhr7Z2ECCTIF_xsg__ny7U9A08AQ--IqPJdPF6-VmkfOoaX3Un-0OIIyA_WJcW7exlKCtgWNAHrpk9X95WyMYMjVQxX5VcTVwoHo)


## Jenre

- J-Pop
    - Vocaloid
    - Animation
    - Rap
    - Idol


## Playlist

주기적으로 업데이트 됩니다  

### Spotify - お気に入り曲 - Liked Songs

<style>
  .spotify-flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
    align-items: flex-start;
  }
  .spotify-item {
    flex: 1 1 100%;
    min-width: 300px;
    box-sizing: border-box;
    margin: 0;
  }
  @media (min-width: 768px) {
    .spotify-item {
      flex: 1 1 calc(50% - 10px);
    }
  }
  .spotify-item img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  .spotify-item iframe {
    width: 100%;
    border-radius: 12px;
  }
  .youtube-section {
    margin: 20px 0;
    width: 100%;
  }
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
</style>

<div class="spotify-flex-container">
  <div class="spotify-item" style="text-align: center;">
    <a href="https://open.spotify.com/user/vrzp923oitpudxzpcglk8pa40">
      <img src="https://spotify-recently-played-readme.vercel.app/api?user=vrzp923oitpudxzpcglk8pa40&count=5&unique=true"
           alt="Spotify recently played"
           height="300" />
    </a>
  </div>
  <div class="spotify-item">
    <iframe data-testid="embed-iframe"
            src="https://open.spotify.com/embed/playlist/3Dx3X4hrl630CbDMHvtpai?utm_source=generator"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
    </iframe>
  </div>
</div>

### Youtube - 好きな歌ってみた - Liked Cover Songs

<style>
  .yt-playlist {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin: 16px 0;
  }
  .yt-card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    background: var(--card-bg, #1e1e2e);
    text-decoration: none;
    color: inherit;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .yt-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }
  .yt-thumb {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
  .yt-info {
    padding: 8px 10px 10px;
  }
  .yt-title {
    font-size: 0.82rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .yt-loading, .yt-error {
    font-size: 0.85rem;
    opacity: 0.6;
    padding: 8px 0;
  }
  .yt-playlist-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.9rem;
    margin: 4px 0 4px;
  }
</style>

<p class="yt-playlist-link">
  <a href="https://www.youtube.com/playlist?list=PLI8v8TR0VO8l0CoLeN6S5h98gXB3hsOyp" target="_blank" rel="noopener noreferrer">▶ View Full Playlist →</a>
</p>

<div id="yt-playlist-container">
  <p class="yt-loading">플레이리스트 불러오는 중...</p>
</div>

<script>
(function() {
  const container = document.getElementById('yt-playlist-container');

  fetch('/api/youtube-playlist.json')
    .then(r => r.json())
    .then(data => {
      const playlistId = data.playlistId;
      const videos = data.videos || [];
      if (!videos.length) {
        container.innerHTML = '<p class="yt-error">영상을 불러올 수 없습니다.</p>';
        return;
      }
      const grid = document.createElement('div');
      grid.className = 'yt-playlist';
      videos.slice(0, 6).forEach(v => {
        const a = document.createElement('a');
        a.className = 'yt-card';
        a.href = `https://www.youtube.com/watch?v=${v.videoId}&list=${playlistId}`;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        const img = document.createElement('img');
        img.className = 'yt-thumb';
        img.src = v.thumbnail;
        img.alt = '';
        img.loading = 'lazy';
        const info = document.createElement('div');
        info.className = 'yt-info';
        const title = document.createElement('p');
        title.className = 'yt-title';
        title.textContent = v.title;
        info.appendChild(title);
        a.appendChild(img);
        a.appendChild(info);
        grid.appendChild(a);
      });
      container.innerHTML = '';
      container.appendChild(grid);
    })
    .catch(() => {
      container.innerHTML = '<p class="yt-error">플레이리스트를 불러오지 못했습니다.</p>';
    });
})();
</script>
