/* 학습홈 2.0 · 교사용 등대 목록 (등대.html 이 읽음)
   - TEACHER_LINKS: 묶음(g)마다 [이름, 주소]. 세 번째 칸이 'local' 이면 학원 컴퓨터에서 파일로 열었을 때만 열림.
   - TEACHER_FILES: 수업자료. 파일은 깃허브에 올리지 않고 학원 컴퓨터 폴더(클로드 폴더 기준 상대 경로)에 있는 그대로 연결.
     과목(t) > 묶음(sub: t, dir, files[[보이는 이름, 파일 이름]])
   - 화면의 "+ 링크 추가"로 넣은 것은 여기가 아니라 그 브라우저에만 저장됨(studyhome_new_teacher_links).
*/
window.TEACHER_LINKS = [
  {g: '수업', items: [['엔트리', 'https://playentry.org'], ['스크래치', 'https://scratch.mit.edu'], ['TurboWarp', 'https://turbowarp.org'], ['틴커캐드', 'https://www.tinkercad.com'], ['앱인벤터', 'https://appinventor.mit.edu']]},
  {g: '시험', items: [['COS 엔트리 연습', 'https://kssim00.github.io/coden_edu/cos_entry_lab/index.html'], ['COS 스크래치 2.0 연습', 'https://kssim00.github.io/coden_edu/cos_scratch2_lab/index.html'], ['AI 튜터', 'https://claude.ai/public/artifacts/68541789-3e4c-459d-a4db-f3a746415d74'], ['COS 접수 (YBM)', 'https://www.ybmit.com']]},
  {g: '관리', items: [['진도 대시보드', 'https://kssim00.github.io/coden_edu/dash12.html'], ['예전 학습홈', '../study_home.html'], ['수업 리포트', '../학습리포트/coding_report_system_v6_ai.html', 'local'], ['깃허브 web_book', 'https://github.com/kssim00/web_book'], ['깃허브 coden_edu', 'https://github.com/kssim00/coden_edu']]}
];

window.TEACHER_FILES = [
  {t: '엔트리', sub: [{t: '와이즈 지도안', dir: '../학습리포트/와이즈_엔트리지도안/', files: ['1-1','1-2','1-3','1-4','2-1','2-2','2-3','2-4','3-1','3-2','3-3','3-4','4-1','4-2'].map(n => [n, n + '.pdf'])}]},
  {t: '스크래치', sub: []},
  {t: '파이썬', sub: []},
  {t: '그 밖에', sub: []}
];
