---
title: "Lyrical Sync"
published: 2026-03-07
description: "LRC 가사 동기화 데스크탑 앱 개발 배경과 프로그램 소개"
tags: [Lyrical Sync, LRC]
category: Lyrical Sync
lang: ko
---

노래에서 가사는 매우 큰 비중을 차지한다.

스트리밍 서비스에서는 당연히 제공되지만, 로컬에 저장된 음악은 사정이 다르다. 특히 마이너한 곡은 LRC 파일을 직접 만들어야 한다.

그런데 막상 만들려고 하면 쓸 만한 도구가 없었다.

---

## 기존 도구들의 문제

LRC 편집기는 찾아보면 있긴 하다. 그런데 대부분 이런 문제가 있었다.

- UI가 너무 오래됐거나, macOS에서 제대로 동작하지 않음
- 파형 시각화 없이 텍스트만 편집하는 구조라 타이밍 잡기가 어려움
- 재생하면서 실시간으로 타임스탬프를 찍는 기능이 없거나 불편함
- 한국어 UI 지원이 없음

결국 텍스트 에디터로 직접 숫자를 적거나, 불편한 도구를 사용해야 했다.

---

## Lyrical Sync란

**Lyrical Sync**는 LRC 가사 파일을 만들고 편집하는 데스크탑 앱이다.

macOS와 Windows를 모두 지원하며, Tauri v2 기반으로 제작했다.


### 핵심 기능


**파형 시각화와 실시간 스탬핑**

오디오 파일을 불러오면 wavesurfer.js 기반 파형이 표시된다. 재생 중에 단축키를 누르면 현재 재생 위치가 해당 줄의 타임스탬프로 즉시 기록된다. 화면을 보면서 박자에 맞춰 찍을 수 있어서, 기존의 숫자 입력 방식보다 훨씬 직관적이다.



**AI 자동 싱크**

타임스탬프를 일일이 손으로 찍는 게 번거롭다면 AI 자동 정렬을 쓸 수 있다. CTC Forced Aligner로 가사 텍스트를 음성과 강제 정렬하고, Demucs로 보컬을 분리해 정확도를 높인다. 정렬 결과를 직접 수정하는 것도 가능하다.

> [!TIP]
> [설치 가이드](https://ahri2nd.xyz/posts/lyrical-sync-ai-installation-guide-ko/)



**Spotify, Youtube 스트리밍 서비스 연결 지원**

연결된 Spotify 계정에서 재생중인 곡과 Youtube 동영상을 재생하여 LRC 파일을 제작할 수 있다.

> [!TIP]
> [Spotify 연동 가이드](https://ahri2nd.xyz/posts/lyrical-sync-spotify-guide-ko/), [Youtube 오디오 가이드](https://ahri2nd.xyz/posts/lyrical-sync-youtube-guide-ko/)



**메타데이터 편집**

`[ti:]`, `[ar:]`, `[al:]` 등 LRC 메타데이터를 GUI로 편집할 수 있다. Raw LRC 텍스트를 직접 수정하는 팝업 에디터도 지원한다.



**미리보기**

작업한 가사가 실제로 어떻게 보이는지 전체화면으로 확인할 수 있다.



**다국어 UI**

한국어 / 영어 / 일본어를 지원한다.

---

## 기술 스택

| 역할 | 기술 |
|---|---|
| 데스크탑 프레임워크 | Tauri v2 |
| 프론트엔드 | React 19 + TypeScript |
| 스타일링 | Tailwind CSS v4 |
| 상태 관리 | Zustand v5 |
| 파형 시각화 | Wavesurfer.js v7 |
| AI 정렬 | CTC Forced Aligner + Demucs |

---

## 마치며

처음에는 개인적으로 쓰려고 만든 도구였는데, 기능을 붙이다 보니 어느 정도 완성도 있는 앱이 됐다.

→ [github.com/AHRI2nd/Lyrical-Sync](https://github.com/AHRI2nd/Lyrical-Sync)
