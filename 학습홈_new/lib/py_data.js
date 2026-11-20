/* 파이썬 교재 목록. 순서를 바꾸거나 교재를 추가할 때는 이 파일만 고치면 스킬 트리와 교재 띠에 함께 반영됩니다. */
(function () {
const GRAMMAR = [
  {ch: 'LV.1  입출력과 자료형', items: [
    ['print', '출력 print()', 'python_print.html', '화면에 글자와 숫자를 출력하는 것부터 시작해요.'],
    ['var', '변수와 자료형', 'python_var.html', '값을 담아 두는 변수와, 숫자·문자 같은 자료형을 다뤄요.'],
    ['input', '입력 input()', 'python_input.html', '키보드로 값을 입력받아 프로그램에 사용해요.']]},
  {ch: 'LV.2  문자열과 리스트', items: [
    ['str', '문자열 (string)', 'python_string.html', '문자열을 자르고, 붙이고, 원하는 글자를 골라내요.'],
    ['list', '리스트 (list)', 'python_list.html', '여러 값을 하나로 묶어 순서대로 다뤄요.']]},
  {ch: 'LV.3  조건문 · 반복문', items: [
    ['if', '조건문 (if)', 'python_if.html', '조건에 따라 다른 코드를 실행해요.'],
    ['while', '반복문 (while)', 'python_while.html', '조건이 맞는 동안 계속 반복해요.'],
    ['for', '반복문 (for)', 'python_for.html', '정해진 횟수나 목록만큼 반복해요.'],
    ['for²', '중첩 반복문', 'python_nested_loop.html', '반복문 안에 반복문을 넣어 표와 도형을 만들어요.']]},
  {ch: 'LV.4  자료형', items: [
    ['utf', '유니코드와 문자열', 'python_unicode.html', '컴퓨터가 글자를 숫자로 저장하는 방식을 알아봐요.'],
    ['( )', '튜플 (tuple)', 'python_tuple.html', '바꿀 수 없는 묶음, 튜플을 써 봐요.'],
    ['{ }', '집합 (set)', 'python_set.html', '중복 없는 묶음, 집합으로 계산해요.']]},
  {ch: 'LV.5  함수와 클래스', items: [
    ['def', '함수 (function)', 'python_function.html', '자주 쓰는 코드를 함수로 묶어 재사용해요.'],
    ['class', '클래스 (class)', 'python_class.html', 'RPG 캐릭터를 만들며 클래스를 배워요.'],
    ['class²', '클래스 두 번째 이야기', 'python_class2.html', '동물원·성적표 예제로 클래스를 한 번 더 다져요.']]}
];
const TURTLE = [
  {ch: 'LV.1  화면과 그리기', items: [
    ['01', '터틀 시작하기: 화면·모양·크기·색', 'python_turtle.html', '터틀 창을 띄우고 거북이의 모양과 색을 바꿔요.'],
    ['02', '앞으로 뒤로 이동하기', 'python_turtle.html', '거북이를 앞뒤로 움직여 선을 그려요.'],
    ['03', '좌표로 이동하기, 펜 들고 내리기', 'python_turtle.html', '좌표로 원하는 곳에 가고, 펜을 들었다 내려요.']]},
  {ch: 'LV.2  좌표와 텍스트', items: [
    ['04', '방향 바꾸기', 'python_turtle.html', '각도를 돌려 여러 방향으로 그려요.'],
    ['05', '원 그리기, 색 채우기, 도장, 글씨', 'python_turtle.html', '원과 색 채우기, 도장, 글씨 쓰기를 해 봐요.']]},
  {ch: 'LV.3  이벤트와 애니메이션', items: [
    ['06', '반복문으로 쉽게 그리기', 'python_turtle.html', '반복문으로 복잡한 무늬를 짧은 코드로 그려요.'],
    ['mini', '미니 프로젝트 - 방패 만들기', 'python_turtle.html', '반복문으로 캡틴 아메리카 방패를 그리는 미니 프로젝트예요.'],
    ['07', '함수 만들기', 'python_turtle.html', '그리기 코드를 함수로 묶어요.'],
    ['08', '키보드와 마우스로 움직이기', 'python_turtle.html', '키보드와 마우스 입력에 반응하게 만들어요.'],
    ['09', '미니 게임 만들기 - 터틀 피하기', 'python_turtle.html', '배운 것을 모아 피하기 게임을 완성해요.']]}
];
const BONUS = [
  ['paint', '나만의 그림판', 'turtle_tool_paint.html', '마우스 드래그 · 펜 제어'],
  ['arrow', '화살 쏘기 게임', 'turtle_game_arrow.html', '클릭 이벤트 · 좌표·거리 계산'],
  ['maze', '미로 탈출 게임', 'turtle_game_maze.html', '2차원 좌표 · 리스트 · 함수 작성'],
  ['cannon', '대포 쏘기 게임', 'turtle_game_cannon.html', '키보드 이벤트 · 랜덤 · 거리 계산'],
  ['run', '도망 게임', 'turtle_game_run.html', '전역변수 · 타이머 반복'],
  ['art', '추상 화가 터틀', 'turtle_game_abstract.html', 'while True · break · random.choice'],
  ['pong', '핑퐁 게임', 'turtle_game_pingpong.html', 'while True · 속도 · 충돌 판정'],
  ['catch', '터틀 잡기 게임', 'turtle_game_catch.html', '리스트 · 랜덤 · 함수 · 타이머'],
  ['race', '터틀 레이스 게임', 'turtle_game_race.html', '리스트 · 랜덤 · 클래스'],
  ['snow', '크리스마스 눈송이', 'turtle_tool_snow.html', '클래스 · 랜덤 · 애니메이션']
];
/* 터틀 교재 주소. 지금은 컴퓨터의 파일을 열고, 사이트에 올릴 때 사이트 안의 주소로 바꿉니다. */
window.PYDATA = {BASE: 'https://kssim00.github.io/web_book/', TURTLE_URL: '../python_turtle.html', GRAMMAR: GRAMMAR, TURTLE: TURTLE, BONUS: BONUS};
})();
