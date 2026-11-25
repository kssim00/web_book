/* 학습홈 2.0 · 교사용 등대 목록 (등대.html 이 읽음)
   - TEACHER_LINKS: 묶음(g)마다 [이름, 주소]. 세 번째 칸이 'local' 이면 학원 컴퓨터에서 파일로 열었을 때만 열림.
   - TEACHER_FILES: 수업자료. 파일은 깃허브에 올리지 않고 학원 컴퓨터 폴더(클로드 폴더 기준 상대 경로)에 있는 그대로 연결.
     과목(t) > 묶음(sub: t, dir, files[[보이는 이름, 파일 이름]])
     클로드 폴더 밖의 자료는 옮기지 않고 dir 에 그 컴퓨터의 전체 주소(file:///N:/…/)를 적는다.
   - 화면의 "+ 링크 추가"로 넣은 것은 여기가 아니라 그 브라우저에만 저장됨(studyhome_new_teacher_links).
*/
window.TEACHER_LINKS = [
  {g: '수업', items: [['엔트리', 'https://playentry.org'], ['스크래치', 'https://scratch.mit.edu'], ['TurboWarp', 'https://turbowarp.org'], ['틴커캐드', 'https://www.tinkercad.com'], ['앱인벤터', 'https://appinventor.mit.edu']]},
  {g: '시험', items: [['COS 엔트리 연습', 'https://kssim00.github.io/coden_edu/cos_entry_lab/index.html'], ['COS 스크래치 2.0 연습', 'https://kssim00.github.io/coden_edu/cos_scratch2_lab/index.html'], ['AI 튜터', 'https://claude.ai/public/artifacts/68541789-3e4c-459d-a4db-f3a746415d74'], ['COS 접수 (YBM)', 'https://www.ybmit.com']]},
  {g: '관리', items: [['진도 대시보드', 'https://kssim00.github.io/coden_edu/dash12.html'], ['예전 학습홈', '../study_home.html'], ['수업 리포트', '../학습리포트/coding_report_system_v6_ai.html', 'local'], ['깃허브 web_book', 'https://github.com/kssim00/web_book'], ['깃허브 coden_edu', 'https://github.com/kssim00/coden_edu']]}
];

/* 수업자료는 이 컴퓨터의 "열기 도우미"(클로드\\등대_열기도우미, codenopen: 주소)로 원본을 연다.
   TEACHER_HOME = 이 컴퓨터에서 학습홈_new 폴더의 주소. 상대 경로(dir)는 여기를 기준으로 푼다. */
window.TEACHER_HOME = 'file:///C:/Users/kssim/Downloads/클로드/학습홈_new/';

window.TEACHER_FILES = [
  {t: '파이썬', sub: [{t: 'PPT', dir: 'file:///N:/개인/60. 파이썬/코딩하루_파이썬/파이썬_PPT/', files: [['파이썬 1권', '파이썬1권_코딩하루.pptx'], ['파이썬 2권', '파이썬2권_코딩하루.pptx']]}]}
];
