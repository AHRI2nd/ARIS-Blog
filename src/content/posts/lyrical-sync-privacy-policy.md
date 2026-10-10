---
title: Lyrical Sync 개인정보처리방침
published: 2026-10-09
description: "Lyrical Sync Store edition의 개인정보 처리와 기기 내 저장에 관한 안내입니다."
tags: [Lyrical Sync, Privacy]
category: 정책
draft: false
unlisted:
  home: true
  archive: true
  tags: true
  category: true
lang: ko
---

🌐 **한국어** · [English](/posts/lyrical-sync-privacy-policy-en/) · [日本語](/posts/lyrical-sync-privacy-policy-ja/)

---

**운영자:** Tsukimori Ahri · **개인정보 문의:** [tsukimori@ahri2nd.xyz](mailto:tsukimori@ahri2nd.xyz) · **시행일:** 2026-10-09

## 적용 범위

이 방침은 macOS 및 Windows용 **Lyrical Sync Store edition**과 앱 관련 문의 처리에 적용됩니다.

## 앱에서 처리하는 정보와 목적

앱은 사용자가 선택한 오디오와 곡 정보, 가사·메타데이터·타임스탬프를 재생과 편집을 위해 기기에서 처리합니다. 저장하거나 내보내면 가사와 선택한 형식이 지원하는 정보를 사용자가 선택한 파일에 기록합니다. 앱은 이 데이터와 파일 경로·편집 기록을 개발자 서버로 업로드하지 않습니다. 계정 가입은 필요하지 않으며, 앱 자체에는 광고·사용 분석·원격 오류 수집 기능이 없습니다.

## 기기에 저장되는 정보

설정, 단축키와 최근 파일 항목을 기기에 저장합니다. 최근 목록은 최대 8개 항목이며, 각 항목에는 가사·오디오 파일 경로, 연 시각, macOS 파일 접근 북마크가 포함될 수 있습니다. 복구용 사본에는 미저장 작업의 가사·곡 정보·타임스탬프·파일 경로·접근 북마크가 포함될 수 있습니다. 복구용 사본 저장은 원본 파일 자동 저장과 별도이며 기본적으로 켜져 있습니다.

## 보관·삭제와 사용자 통제

복구용 사본 저장을 끄면 확인 후 기존 복구용 사본을 삭제하고 새 사본 생성을 중지합니다. 이 설정은 원본 파일 자동 저장과 별개입니다.

복구용 사본 저장이 켜져 있을 때 최신 변경사항이 저장되어 미저장 상태가 해소되면 해당 세션의 복구용 사본이 제거됩니다. 시작 시 복구 알림에서 버리기를 선택해도 해당 사본이 제거됩니다.

‘로컬 데이터 지우기’를 실행하면 최근 파일 목록, 저장된 보안 접근 북마크와 복구용 사본을 삭제하고 UI·단축키 등의 설정을 초기화합니다. 복구용 사본 저장과 원본 파일 자동 저장은 꺼진 상태로 유지되며, 이 두 선택을 기억하는 최소 설정은 남습니다.

이 작업은 원본 가사·오디오 파일이나 현재 편집 내용을 삭제하지 않습니다. 열려 있는 문서의 파일 참조와 접근 정보는 문서를 닫을 때까지 메모리에 남습니다. 이후 파일을 열거나 설정을 바꾸면 관련 로컬 기록이 다시 생길 수 있습니다.

저장소 오류로 일부 삭제나 설정 저장이 실패하면 앱이 오류를 알리고 재시도를 안내합니다. 로컬 데이터 지우기는 WebView2 진단 파일, 운영체제 캐시 또는 Microsoft에 이미 전송된 정보를 삭제하지 않습니다. 사용자가 저장하거나 내보낸 파일은 사용자가 직접 관리하고 삭제할 수 있습니다.

## 외부 전송과 보호

앱 자체 기능은 원본 가사·오디오 파일을 개발자 서버에 업로드하지 않으며, 자체 사용 분석이나 원격 오류 수집 기능이 없습니다. 사용자가 클라우드 동기화 폴더를 선택하면 별도 동기화 서비스가 자체 설정에 따라 파일을 처리할 수 있습니다.

Windows Store edition에는 Microsoft WebView2 Runtime이 포함됩니다. Windows 진단 설정에 따라 선택 진단 데이터가 처리될 수 있으며, 필수 진단 데이터는 해당 설정과 관계없이 수집될 수 있습니다. 앱의 Windows 설정은 Microsoft Defender SmartScreen을 활성화하며, SmartScreen은 사용자 정보를 Microsoft에 수집·전송합니다. WebView2 프로세스가 충돌하면 진단용 미니덤프가 생성되어 Microsoft에 전송됩니다. 이러한 WebView2 런타임 진단 및 충돌 보고는 Microsoft에 전달되며 앱 게시자에게 전달되지 않습니다. 자세한 내용은 [Microsoft 개인정보처리방침](https://privacy.microsoft.com/en-us/privacystatement)과 [WebView2 데이터 및 개인정보 문서](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/data-privacy)를 확인하세요. 이 안내는 Windows edition에만 적용되며 macOS edition은 WKWebView를 사용합니다.

앱 자체 암호화 기능은 제공하지 않으며, 로컬 자료의 접근 보호는 운영체제의 계정 및 파일 보호에 의존합니다.

## 문의 및 이메일 처리

개인정보 관련 문의는 [tsukimori@ahri2nd.xyz](mailto:tsukimori@ahri2nd.xyz)로 보내 주세요.

문의 내용과 첨부 파일은 최초 수신일부터 최대 6개월 이내에 삭제합니다.

앱과 관련된 개인정보의 열람·정정·삭제·처리정지 요청은 위 이메일로 보내 주세요. 운영자가 요청을 확인하고 처리 방법과 결과를 회신합니다.

## 변경 및 연락

앱 기능이나 개인정보 처리 방식이 바뀌면 이 방침을 갱신합니다. 문의는 위 개인정보 연락처로 보내 주세요.
