/* 학습홈 2.0 — 회원·진도 저장
   STUDY_API: 회원용 구글 Apps Script 웹 앱 주소(…/exec). 비어 있으면 가입 정보·진도는 그 컴퓨터에만 저장된다.
   로그인한 학생의 진도(S)가 바뀌면 화면을 떠날 때·1분마다 구글 시트로 보낸다. */
window.STUDY_API = '';
(function () {
  var KEY = 'studyhome_new_3d_demo', AKEY = '학습홈_auth', last = null;
  var read = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  var auth = function () { try { return JSON.parse(sessionStorage.getItem(AKEY)); } catch (e) { return null; } };
  last = read();
  function push(force) {
    var api = window.STUDY_API, a = auth(), raw = read();
    if (!api || !a || !a.id || !raw || (!force && raw === last)) return;
    try { if (JSON.parse(raw).uid !== a.id) return; } catch (e) { return; }
    last = raw;
    var body = JSON.stringify({action: 'saveState', id: a.id, h: a.h, state: raw});
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(api, new Blob([body], {type: 'text/plain;charset=utf-8'}))) return;
      fetch(api, {method: 'POST', mode: 'no-cors', keepalive: true, headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: body});
    } catch (e) {}
  }
  window.addEventListener('pagehide', function () { push(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) push(); });
  setInterval(function () { push(); }, 60000);
  window.studySync = push;
})();
