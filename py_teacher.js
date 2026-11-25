/* 파이썬 문법교재 — 교사용 빨간 답지 (편집기로 만든 교재용)
   선생님 모드(localStorage '학습홈_admin' = '1')일 때만 답을 그린다. 학생 화면에는 아무것도 하지 않는다.
   - 객관식·주관식 퀴즈: 교재에 들어 있는 정답 표시(data-correct, data-correct-answer)를 읽어 빨갛게 보여 준다. 새로 만든 교재에도 그대로 적용된다.
   - 코딩 미션: 아래 DATA 에서 "교재 파일 이름 → 미션 제목(t) + 설명 앞부분(s)"이 같은 답을 찾아 붙인다.
     미션 순서를 바꾸거나 다른 미션을 추가해도 답이 따라간다. 제목·설명을 바꾸면 그 미션의 t, s 도 함께 고쳐야 한다(공백은 모두 뺀 글자).
   이 파일은 교재 맨 끝의 <script src="py_teacher.js"> 로 불러오고, 그 줄이 없어도 새 학습홈(교재.html)·예전 학습홈(study_home.html)이 선생님에게는 알아서 얹어 준다. */
(function () {
  if (window.__pyTeacher) return;
  var t = false; try { t = localStorage.getItem('학습홈_admin') === '1'; } catch (e) {}
  if (!t || document.getElementById('t-answers')) return;
  window.__pyTeacher = 1;
  var DATA = {
 "python_print.html": [
  {
   "t": "내소개출력하기",
   "s": "다음과같이출력하는코드를작성하세요.❇️조건첫문장은인수1개로출력하세요.두문장",
   "code": "print(\"안녕! 나는 파이썬 탐험가야.\")\nprint()\nprint(\"내가 좋아하는 것은\", \"게임이야.\")"
  },
  {
   "t": "대화속따옴표출력하기",
   "s": "다음과같이출력하는코드를작성하세요.❇️조건각문장을print()하나로출력하세",
   "code": "print(\"내 별명은 '파이썬 탐험가'야.\")\nprint('친구가 \"멋진 별명이네!\"라고 말했어.')"
  },
  {
   "t": "계산결과를문장으로출력하기",
   "s": "다음과같이출력하는코드를작성하세요.출력1빼기1은0이다33의2제곱은1089이",
   "code": "print(\"1 빼기 1은\", 1 - 1, \"이다\")\nprint(\"33의 2제곱은\", 33 ** 2, \"이다\")\nprint(\"1089 나누기 33은\", int(1089 / 33), \"이다\")"
  },
  {
   "t": "게임캐릭터소개하기",
   "s": "다음과같이출력하는코드를작성하세요.❇️조건이름과레벨사이는\\t로맞추세요.I'",
   "code": "print(\"My Hero\")\nprint(\"Name\\tLevel\")\nprint(\"Tom\\t10\")\nprint(\"Luna\\t20\")\nprint('I\\'m ready!')"
  },
  {
   "t": "전화번호출력하기",
   "s": "아래코드에sep를추가해,번호사이에하이픈(-)이들어가도록수정하세요.prin",
   "code": "print(\"010\", \"1234\", \"5678\", sep=\"-\")"
  },
  {
   "t": "이메일과주소출력하기",
   "s": "다음과같이출력되도록아래코드를수정해주세요.❇️조건sep·end옵션을사용하세",
   "code": "print(\"이메일주소 : \", end=\"\")\nprint(\"coding\", end=\"@\")\nprint(\"naver\", end=\".\")\nprint(\"com\")\nprint(\"주소\", \"경기도 부천시\", sep=\" : \")"
  },
  {
   "t": "파일경로및파일명출력하기",
   "s": "윈도우파일경로와파일명을조합하여다음과같이출력하세요.❇️조건sep옵션,end",
   "code": "print(\"C:\", \"Python\", \"work\", sep=\"\\\\\", end=\"\\\\\")\nprint(\"test\", \"py\", sep=\".\")"
  },
  {
   "t": "영수증출력하기",
   "s": "아래영수증이출력되도록코드를작성하세요.❇️조건아래예시처럼각열의시작위치를정확",
   "code": "print(\"------------------------------\")\nprint(\"품목\", \"단가\", \"수량\", \"합계\", sep=\"\\t\")\nprint(\"사과\", 1000, 3, 1000 * 3, sep=\"\\t\")\nprint(\"------------------------------\")"
  },
  {
   "t": "출력하기",
   "s": "다음결과가출력되도록코드를작성하세요.",
   "code": "print('Python\\'s power is \"amazing\"')"
  },
  {
   "t": "구구단출력하기",
   "s": "구구단2단을다음과같이출력하세요.❇️조건계산결과는직접쓰지말고곱셈연산식으로구",
   "code": "print(\"--- 2단 ---\")\nprint(\"2 * 1 = \", 2 * 1)\nprint(\"2 * 2 = \", 2 * 2)\nprint(\"2 * 3 = \", 2 * 3)\nprint(\"2 * 4 = \", 2 * 4)\nprint(\"2 * 5 = \", 2 * 5)\nprint(\"2 * 6 = \", 2 * 6)\nprint(\"2 * 7 = \", 2 * 7)\nprint(\"2 * 8 = \", 2 * 8)\nprint(\"2 * 9 = \", 2 * 9)\nprint(\"-----------\")"
  }
 ],
 "python_var.html": [
  {
   "t": "이름과나이출력하기",
   "s": "name과age변수를만들고값을할당한후다음과같이출력하는코드를작성하세요.",
   "code": "name = \"홍길동\"\nage = 16\nprint(\"이름 :\", name)\nprint(\"나이 :\", age)"
  },
  {
   "t": "변수의값예측하기",
   "s": "예상되는출력결과를적으세요.코드를직접작성해실행한뒤,실제출력과비교하세요.",
   "inputs": [
    "4",
    "3",
    "8.0",
    "1",
    "2"
   ]
  },
  {
   "t": "편의점거스름돈계산하기",
   "s": "편의점에서손님이3,200원어치간식을사고10,000원을냈어요.아래코드를완성",
   "code": "money = 10000\ntotal = 3200\nchange = money - total\nprint(\"거스름돈은 \", change, \"원입니다.\", sep=\"\")\nprint(\"1,000원권: \", change // 1000, \"장\", sep=\"\")\nprint(\"100원짜리 동전: \", change % 1000 // 100, \"개\", sep=\"\")"
  },
  {
   "t": "게임캐릭터능력치업데이트",
   "s": "모험가의공격력(power)을150으로시작해,아래이야기대로바뀌는공격력을출력",
   "code": "power = 150\nprint(\"모험을 시작합니다!\")\nprint(\"현재 공격력:\", power)\nprint()\npower *= 2\nprint(\"힘의 포션을 마셨어요. 공격력이 2배가 됐어요!\")\nprint(\"현재 공격력:\", power)\nprint()\npower -= 30\nprint(\"이런! 독버섯을 먹어서 공격력이 30 줄었어요.\")\nprint(\"최종 공격력:\", power)"
  },
  {
   "t": "사각형의넓이",
   "s": "가로길이8을변수width에저장하고,세로길이5를변수height에저장한후가로",
   "code": "width = 8\nheight = 5\nprint(\"가로 길이:\", width)\nprint(\"세로 길이:\", height)\nprint(\"넓이:\", width * height)"
  }
 ],
 "python_input.html": [
  {
   "t": "편의점계산기만들기",
   "s": "사용자로부터물건의가격과개수를입력받아총금액을계산하는프로그램을만드세요.❇️조",
   "code": "price = int(input())\ncount = int(input())\nprint(\"총 금액은 \", price * count, \"원입니다.\", sep=\"\")"
  },
  {
   "t": "직사각형넓이구하기",
   "s": "가로와세로길이를공백으로구분하여한번에입력받아,직사각형의넓이를계산하는프로그램",
   "code": "width, height = input().split()\nwidth = int(width)\nheight = int(height)\narea = width * height\nprint(\"직사각형의 넓이:\", area)"
  },
  {
   "t": "세과목의평균점수구하기",
   "s": "국어,영어,수학점수를공백으로구분하여한번에입력받아,세과목의평균점수를계산하는",
   "code": "kor, eng, math = input().split()\nkor = int(kor)\neng = int(eng)\nmath = int(math)\naverage = (kor + eng + math) / 3\nprint(\"평균 점수:\", average)"
  },
  {
   "t": "자기소개명함만들기",
   "s": "사용자로부터이름과취미를입력받아멋진문장으로출력하는프로그램을만드세요.❇️조건",
   "code": "name = input(\"이름을 입력하세요: \")\nhobby = input(\"취미를 입력하세요: \")\nprint(\"안녕하세요! 취미가 \", hobby, \"인 \", name, \"입니다.\", sep=\"\")"
  },
  {
   "t": "초간단나이계산기",
   "s": "올해연도와태어난연도를입력받아아래공식으로세는나이를계산하는프로그램을만드세요.",
   "code": "this_year = int(input(\"올해 연도: \"))\nbirth_year = int(input(\"태어난 연도: \"))\nage = this_year - birth_year + 1\nprint(\"당신의 나이는 \", age, \"살이군요!\", sep=\"\")"
  },
  {
   "t": "나만의할인계산기만들기",
   "s": "물건의정가와할인율을입력하면,할인이적용된최종가격을알려주는프로그램을만들어보세",
   "code": "price = int(input(\"물건의 정가를 입력하세요: \"))\ndiscount_rate = float(input(\"할인율을 입력하세요(% 제외): \"))\nfinal_price = price - price * (discount_rate / 100)\nprint(\"정가:\", price, \"원\")\nprint(\"할인율:\", discount_rate, \"%\")\nprint(\"최종 할인 적용가는\", final_price, \"원입니다.\")"
  },
  {
   "t": "계산기",
   "s": "두수를입력받아다음결과를출력하세요.",
   "code": "a = int(input())\nb = int(input())\nprint(\"합 :\", a + b)\nprint(\"차 :\", a - b)\nprint(\"곱 :\", a * b)\nprint(\"나눗셈 :\", a / b)\nprint(\"나머지 :\", a % b)"
  },
  {
   "t": "두정수의합과곱구하기",
   "s": "공백으로구분된두정수를한번에입력받아,두수의합과곱을출력하는프로그램을만드세요.",
   "code": "num1, num2 = map(int, input().split())\nprint(\"합:\", num1 + num2)\nprint(\"곱:\", num1 * num2)"
  },
  {
   "t": "자기소개문장만들기",
   "s": "이름과나이를공백으로구분하여한번에입력받아,\"OO님은OO세입니다\"형태로출력하",
   "code": "name, age = input().split()\nage = int(age)\nprint(name + \"님은 \" + str(age) + \"세입니다\")"
  }
 ],
 "python_list.html": [
  {
   "t": "코딩미션",
   "s": "문자열을입력받아리스트로만드는프로그램을작성해주세요.",
   "code": "s = input()\nprint(list(s))"
  },
  {
   "t": "코딩미션",
   "s": "\"우유\",\"라면\"값을가지는inventory리스트를만들고,리스트요소를추가또",
   "code": "inventory = [\"우유\", \"라면\"]\ninventory.remove(\"라면\")\ninventory.append(\"콜라\")\ninventory.append(\"삼각김밥\")\nprint(inventory)"
  },
  {
   "t": "무지개색깔뽑기",
   "s": "1.\"빨\",\"주\",\"노\",\"초\",\"파\",\"남\",\"보\"7개의요소를가진rai",
   "code": "rainbow = [\"빨\", \"주\", \"노\", \"초\", \"파\", \"남\", \"보\"]\nprint(rainbow[5])\nprint(rainbow[0:5:2])"
  },
  {
   "t": "투표결과집계",
   "s": "리스트함수를이용하여총투표수와\"A\"후보의득표수를출력하세요.[출력]총투표수:",
   "code": "votes = [\"A\", \"B\", \"A\", \"A\", \"C\", \"B\"]\nprint(\"총 투표수 :\", len(votes))\nprint(\"A 득표수 :\", votes.count(\"A\"))"
  },
  {
   "t": "시험성적분석",
   "s": "다음을출력하는코드를작성하세요.[출력]최고-최저점수의차:34점평균:84.2",
   "code": "scores = [85, 92, 78, 66, 100]\nprint(\"최고-최저 점수의 차 :\", max(scores) - min(scores), \"점\")\nprint(\"평균 :\", sum(scores) / len(scores), \"점\")"
  },
  {
   "t": "코딩미션",
   "s": "시작인덱스와끝인덱스를입력받아새로운리스트n2를만들고,n2리스트의최대,최소,",
   "code": "n = [2, 11, 5, 7, 6, 8, 20]\nstart = int(input(\"시작 인덱스 : \"))\nend = int(input(\"끝 인덱스 : \"))\nn2 = n[start:end + 1]\nprint(\"최솟값 :\", min(n2))\nprint(\"최댓값 :\", max(n2))\nprint(\"합계 :\", sum(n2))\nprint(\"평균 :\", sum(n2) / len(n2))"
  },
  {
   "t": "중간값구하기",
   "s": "사용자에게세개의숫자를입력받아중간값을찾아출력하는프로그램을작성하시오.❇️조건",
   "code": "n = [int(input()), int(input()), int(input())]\nn.remove(min(n))\nn.remove(max(n))\nprint(n)"
  },
  {
   "t": "코딩미션",
   "s": "두개의서로다른리스트a와b를연결연산자(+)로결합하여하나의새로운리스트c로만든",
   "code": "a = [1, 3]\nb = [2, 8, 0]\nc = a + b\nc.sort()\nprint(c)"
  },
  {
   "t": "코딩미션",
   "s": "아래제시된리스트를내림차순으로정렬하려고합니다.필요한코드를작성해주세요.[출력",
   "code": "a = [5, 8, 3, 4, 2, 11]\na.sort(reverse=True)\nprint(a)"
  },
  {
   "t": "코딩미션",
   "s": "사용자에게숫자다섯개를입력받아숫자리스트로만들고sort()를활용하여정렬한뒤중",
   "code": "n = []\nn.append(int(input(\"첫 번째 숫자 : \")))\nn.append(int(input(\"두 번째 숫자 : \")))\nn.append(int(input(\"세 번째 숫자 : \")))\nn.append(int(input(\"네 번째 숫자 : \")))\nn.append(int(input(\"다섯 번째 숫자 : \")))\nn.sort()\nprint(\"숫자 정렬 :\", n)\nprint(\"중간값 :\", n[2])"
  },
  {
   "t": "코딩미션",
   "s": "정렬되지않은아래와같은숫자리스트를오름차순으로정렬하여리스트에저장하고,내림차순",
   "code": "a = [12345, 5678, 910, 111213, 14, 1516]\na.sort()\nb = a[::-1]\nprint(a[0] + b[0])"
  },
  {
   "t": "과일갯수세기",
   "s": "과일을입력받아과일의갯수를세는프로그램을작성하세요.",
   "code": "fruits = input().split()\nprint(len(fruits))"
  },
  {
   "t": "숫자의합구하기",
   "s": "숫자5개를입력받아합을구하는코드를작성하세요",
   "code": "n = list(map(int, input().split()))\nprint(sum(n))"
  },
  {
   "t": "최고점수찾기",
   "s": "숫자를입력받아최고점수를찾는코드를작성하세요.",
   "code": "n = list(map(int, input().split()))\nprint(max(n))"
  },
  {
   "t": "나의생년월일",
   "s": "나의생년월일을입력받아,출력하는코드를작성하세요❇️조건:문자열포맷팅사용하기",
   "code": "y, m, d = map(int, input().split(\"-\"))\nprint(\"나의 생일은 {}년 {}월 {}일 입니다.\".format(y, m, d))"
  },
  {
   "t": "리스트만들기",
   "s": "숫자2개를입력받아,첫번째숫자를뒤의숫자만큼저장한리스트를만드는코드를작성해주세",
   "code": "a, b = map(int, input().split())\nprint([a] * b)"
  },
  {
   "t": "우리반친구이름저장하기",
   "s": "친구이름3개를입력받아리스트에저장한후출력하세요.",
   "code": "names = []\nnames.append(input())\nnames.append(input())\nnames.append(input())\nprint(names)"
  },
  {
   "t": "시험점수저장하기",
   "s": "한줄에입력된시험점수들을리스트로저장하여출력하세요.",
   "code": "scores = list(map(int, input().split()))\nprint(scores)"
  },
  {
   "t": "용돈총액계산하기",
   "s": "5명이받은용돈이입력하면,전체용돈의합계를출력하세요.",
   "code": "money = list(map(int, input().split()))\nprint(sum(money))"
  },
  {
   "t": "가운데학생찾기",
   "s": "학생번호가홀수개입력된다.가운데에있는학생번호를출력하세요.",
   "code": "n = list(map(int, input().split()))\nprint(n[len(n) // 2])"
  },
  {
   "t": "출석횟수세기",
   "s": "출석번호가입력된다.번호8번학생이몇번등장하는지출력하세요.",
   "code": "n = list(map(int, input().split()))\nprint(n.count(8))"
  },
  {
   "t": "양쪽끝제외하기",
   "s": "스트의첫번째와마지막값을제외한나머지값만출력하세요.",
   "code": "n = list(map(int, input().split()))\nprint(n[1:-1])"
  },
  {
   "t": "시험결과분석",
   "s": "학생들의시험점수가입력된다.평균,최고,최저정보를모두출력하세요.",
   "code": "scores = list(map(int, input().split()))\nprint(\"평균 :\", sum(scores) / len(scores))\nprint(\"최대 :\", max(scores))\nprint(\"최소 :\", min(scores))"
  }
 ]
};
  var css = ".t-ans{margin:10px 0 4px;padding:10px 16px;border:1.5px dashed #e03131;border-radius:10px;background:#fff5f5;text-align:left}" +
    ".t-ans-label{color:#e03131;font-size:12px!important;font-weight:800}" +
    ".t-ans pre{margin:4px 0 0;padding:0;background:transparent;color:#e03131;font-family:Consolas,'Courier New',monospace;font-size:16px;line-height:1.6;white-space:pre-wrap;tab-size:8}" +
    ".t-ans-inline{margin-left:8px;color:#e03131;font-weight:800;white-space:nowrap}" +
    ".t-ans-line{margin-top:8px;color:#e03131;font-weight:800}" +
    ".quiz-set-item .select-item.t-correct,.quiz-set-item .select-item.t-correct *{color:#e03131!important;font-weight:800}" +
    ".quiz-set-item .select-item.t-correct::after{content:' ← 정답';font-size:13px}";
  function draw() {
    if (document.body.classList.contains('teacher-mode')) return;
    document.body.classList.add('teacher-mode');
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var el = function (tag, cls, txt) { var d = document.createElement(tag); d.className = cls; if (txt != null) d.textContent = txt; return d; };
    var nz = function (x) { return (x || '').replace(/\s+/g, ''); };
    var file = ''; try { file = decodeURIComponent(location.pathname.split('/').pop()); } catch (e) {}
    var A = DATA[file] || [], used = {};
    document.querySelectorAll('.mission-coding-title').forEach(function (ti) {
      var m = ti.closest('[data-module-id]') || ti.closest('.module-wrapper') || ti.parentNode.parentNode;
      var b = m.querySelector('.mission-coding-body'), title = nz(ti.textContent), sig = nz(b && b.textContent).slice(0, 40), pick = -1, same = [];
      A.forEach(function (a, k) { if (used[k] || a.t !== title) return; same.push(k); if (pick < 0 && a.s === sig) pick = k; });
      if (pick < 0 && same.length === 1) pick = same[0];
      if (pick < 0) return;
      used[pick] = 1; var a = A[pick];
      if (a.inputs) m.querySelectorAll('.subjective-input').forEach(function (inp, k) { if (a.inputs[k] != null) inp.insertAdjacentElement('afterend', el('span', 't-ans-inline', '답: ' + a.inputs[k])); });
      if (a.code) { var d = el('div', 't-ans'); d.appendChild(el('div', 't-ans-label', '정답')); d.appendChild(el('pre', '', a.code)); m.appendChild(d); }
    });
    document.querySelectorAll('.quiz-set-item').forEach(function (q) {
      var c = q.getAttribute('data-correct'), s = q.getAttribute('data-correct-answer'), o = q.querySelectorAll('.select-item');
      if (o.length && c !== null && c !== '' && o[parseInt(c, 10)]) o[parseInt(c, 10)].classList.add('t-correct');
      else if (s) q.appendChild(el('div', 't-ans-line', '정답: ' + s));
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', draw); else draw();
})();
