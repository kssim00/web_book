// =====================================================
//  ⚙️ 설정 파일 — 여기서 값만 바꾸면 됩니다.
//  study_home.html, 엔트리_갤러리.html, 스크래치_갤러리.html
//  세 파일 모두 이 파일의 값을 공유합니다.
// =====================================================

// ↓↓ 아래 값들을 본인 것으로 바꾸세요 ↓↓

// 1) Google Apps Script URL (학생 진도, 과목카드 저장)
const APPS_SCRIPT_URL   = 'https://script.google.com/macros/s/AKfycbwHt7y0wBRW9pTMSaAYc1cesUzcWUku91x5vbw9thCPTUuN4D4XXpd56oW_e8ZSRd3l/exec';
//  예시) const APPS_SCRIPT_URL = '본인_앱스스크립트_URL';

// 2) GitHub Pages 주소
//    (study_home.html 안 파이썬 강의 링크도 이 값 하나로 자동 연결됨)
const GITHUB_BASE       = 'https://kssim00.github.io/web_book/';
//  예시) const GITHUB_BASE     = 'https://본인아이디.github.io/레포이름/';

// 3) 엔트리 갤러리 동영상 링크 시트 CSV 주소
//    구글 시트 → 파일 → 웹에 게시 → '엔트리' 탭 선택 → CSV → 게시 → 주소 복사
const GSHEET_ENTRY_CSV  = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7bsASbvPWUPy0623j99Aasbms_3xKmEnBkWCh5RzfBl1QULX_zmbuRAaalSOPB47Y0n4HDgcsZPYU/pub?gid=0&single=true&output=csv';

// 4) 스크래치 갤러리 동영상 링크 시트 CSV 주소
//    구글 시트 → 파일 → 웹에 게시 → '스크래치' 탭 선택 → CSV → 게시 → 주소 복사
const GSHEET_SCRATCH_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7bsASbvPWUPy0623j99Aasbms_3xKmEnBkWCh5RzfBl1QULX_zmbuRAaalSOPB47Y0n4HDgcsZPYU/pub?gid=1931464993&single=true&output=csv';

// 5) 관리자 비밀번호 (Ctrl+Shift+A 로 관리자 모드에 들어갈 때 입력하는 비밀번호)
//    study_home.html, 엔트리_갤러리.html, 스크래치_갤러리.html 세 파일이 이 값을 공유합니다.
//    (변수명을 SHARED_ADMIN_PW로 둔 이유: index.html은 이 파일과 별개로 관리되는
//     운영 중인 파일이라 건드리지 않으며, 그 파일 안의 자체 ADMIN_PW와 이름이
//     겹치지 않도록 일부러 다르게 지었습니다)
const SHARED_ADMIN_PW = 'admin';
//  예시) const SHARED_ADMIN_PW = '원하는비밀번호';
