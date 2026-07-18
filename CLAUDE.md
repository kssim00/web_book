# web_book 저장소 작업 규칙 (반드시 지킬 것)

## 파일 역할 구분 — 가장 중요한 규칙

- **index.html = 운영(production) 파일.** 학생들과 실제로 사용 중인 파일입니다.
  **절대 수정하지 말 것.** 읽기(참고)는 괜찮지만 Edit/Write로 내용을 바꾸는 것은 금지.
  config.js나 다른 공용 파일을 고칠 때도 index.html이 깨지지 않는지(예: 변수명 충돌)
  반드시 먼저 확인할 것.

- **study_home.html = 작업 중인 파일.** 원장님(사용자)과 함께 계속 수정/개발하는 파일입니다.
  새로운 기능, 버그 수정, 리팩토링은 전부 이 파일에서 진행합니다.

- index.html은 study_home.html이 충분히 검증된 뒤 원장님이 **직접 수동으로** 반영(백업/승격)하는
  파일입니다. Claude가 임의로 index.html에 study_home.html 내용을 복사하거나 동기화하지 말 것.

## 문서 작성 규칙

- 다른 학원 원장님들과 공유하는 세팅 가이드, 설명 문서 등에는 **index.html을 언급하지 말 것.**
  (index.html은 kssim00 개인의 운영/개발 워크플로일 뿐, 시스템 설계상 공식적으로 안내할 대상이 아님)
- 공유 문서에서 접속 주소를 안내할 때는 study_home.html 경로를 명시할 것
  (예: https://본인아이디.github.io/web_book/study_home.html)

## 참고: config.js 공유 구조

- config.js는 study_home.html, 엔트리_갤러리.html, 스크래치_갤러리.html 세 파일이 공유합니다.
  (index.html은 이 그룹에 포함되지 않음 — 위 규칙 참고)
- 관리자 비밀번호는 config.js의 `SHARED_ADMIN_PW`로 관리됩니다. (index.html 자체 `ADMIN_PW`와
  이름이 겹치지 않도록 일부러 다르게 지음 — 절대 이름을 통일시키지 말 것, 충돌하면 index.html이
  깨짐)

## 터틀 게임/실습 파일 이름 규칙 (2026-07-06 확정, 항상 지킬 것)

python_turtle.html 갤러리에 딸린 보너스 게임/실습 파일들의 이름은 아래 규칙으로 통일합니다.

- **본 교재 파일 `python_turtle.html`은 이름을 절대 바꾸지 않음** (study_home.html이 iframe src로
  직접 참조하므로 이름을 바꾸면 사이트가 깨짐)
- **게임**(승패·점수·충돌 등 게임성이 있는 것) → `turtle_game_이름.html`
- **도구/자유실습**(승패 없는 것, 예: 그림판) → `turtle_tool_이름.html`
- 사용자가 새 터틀 보너스 파일을 폴더에 추가하고 "게임에 넣어줘"라고 하면:
  1. 파일명을 위 규칙에 맞게 리네임 (한글 이름이든 뭐든 상관없이)
  2. 파일 내용을 보고 난이도를 평가해서, python_turtle.html의 `WORKSHEETS` 배열에
     `{file, icon, title, tag}` 형태로 등록 (tag = 그 파일이 다루는 프로그래밍 개념 요약,
     갤러리 카드 하단(card-sub)에 그대로 표시됨)
  3. 배열 안에서의 위치는 난이도 순(쉬움→어려움)으로 정렬
  4. root(`클로드/`)와 `클로드/web_book/` 양쪽 모두 파일 복사 + python_turtle.html 수정을
     동일하게 적용할 것 (python_turtle.html은 용량이 커서 통째로 복사하면 안 되고, 같은 Edit
     작업을 양쪽에 각각 적용하는 방식으로 동기화)

**현재(2026-07-06) 목록 — 난이도 순:**
1. `turtle_tool_paint.html` (나만의 그림판) — 마우스 드래그·펜 제어
2. `turtle_game_arrow.html` (화살 쏘기) — 클릭 이벤트·좌표/거리(towards())
3. `turtle_game_cannon.html` (대포 쏘기) — 키보드·랜덤·거리계산, 빈칸채우기형
4. `turtle_game_catch.html` (터틀 잡기) — 리스트·랜덤·함수·타이머
5. `turtle_game_race.html` (터틀 레이스) — 리스트·랜덤·while·클래스(OOP), 가장 어려움
