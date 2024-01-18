/* 클래스 접근 테스트 */

function classTest(){

    // cls-test 클래스를 모두 얻어오기
    // -> HTMLCollection(== 유사 배열)

    /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나 배열 전용 기능(메서드)를 제공안함 */
    const divs = document.getElementsByClassName("cls-test");
    console.log(divs);



    // divs 0번째 요소에 배경색 변경
    divs[0].style.backgroundColor = "rgb(114,203,80)"; 
    divs[1].style.backgroundColor = "rgb(70,45,195)"; 
    divs[2].style.backgroundColor = "rgb(213,3,95)"; //backgroudColor 오타 주의 대소문자 구별 필수

    for(let i = 0 ; i < divs.length ; i++){
        divs[i].innerText = `${i}번째 div입니다.`
    }
}

/* input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){
    // cls-test2 클래스인 요소를 모두 얻어오기
    const inputList = document.getElementsByClassName("cls-test2");

    /* 요소들을 한번에 얻어오게 되면 배열 형태로 받아오게됨.
      -> 요소를 다루고 싶으면 index를 이용해 배열 요소를
        하나씩 꺼내서 다뤄야함 (중요!!!!) */

    let sum = 0;

    for(let i = 0; i < inputList.length ; i++){
        // 요소에 작성된 값 얻어오기
        const value = Number(inputList[i].value);
        sum += value;
        
        
    }
    alert("합계는 "+sum);
}

/* 태그 명으로 요소 접근하기 */
function tagnameTest(){
    const liList = document.getElementsByTagName("li");

    for(let i = 0;i <liList.length; i++){
        // liList[i].innerText : 작성된 내용을 얻어오기
        // liList[i].innerText = "abc" : 내용으로 "abc" 대입하기

        // 반복 중 현재 선택된 요소의 배경색을 작성된 내용과 똑같은 색으로 변경

        liList[i].style.backgroundColor = liList[i].innerText;
    }
}

/* name으로 요소 접근하기 */
function nameTest(){
    // name 속성 값이 "hobby"인 요소를 모두 얻어와 hobbyList에 저장
    const hobbyList = document.getElementsByName("hobby");
    let str = "";
    let count = 0;

    for(let i=0 ; i < hobbyList.length ; i++){ // 순차적으로 접근
        /* checkbox, radio에 쓸 수 잇는 전용 속성 .checked */
        // input요소.checked -> 요소가 체크되어있으면 true, 아니면 false
        // input요소.checked = true -> 해당 요소 체크
        // input요소.checked = false -> 해당 요소 해제
        
        // 체크박스의 값, 체크여부를 출력
        console.log(hobbyList[i].value, hobbyList[i].checked);

        /* 체크 여부를 검사해서 체크가 되어 있다면 
        체크된 요소의 값을 str 변수에 누적하고 count 변수값 1 증가*/
    if(hobbyList[i].checked){
        str += hobbyList[i].value + " ";
        count++;
        
    }

    }
    // #name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML = `${str}<br><br>선택된 취미 개수 : ${count}`;
}

/* css 선택자로 요소 접근하기 */
function cssTest(){

    /* 
        [요소 1개]
      1) document.querySelector("CSS 선택자");
              -> 선택자가 선택한 요소 중 첫 번째 요소를 반환
        [요소 n개 -> 배열]
      2) document.querySelectorAll("CSS 선택자");
          -> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환
    */

    // target-div 속성 값이 "css-div" 요소에 접근
    const container = document.querySelector('[target-div = "css-div"]');

    // 요소의 테두리 변경
    container.style.border = "10px solid red";


    // 첫 번째 자식 div 선택 방법1
    // const div1 = document.querySelector('[target-div = "css-div"] > div:first-child');
    // console.log(div1);
    
    // 첫 번째 자식 div 선택 방법2
    // queryselector()의 첫 번째 요소만 선택한다는 특징을 활용
    const div1 = document.querySelector('[target-div = "css-div"] > div');
    console.log(div1);

    div1.innerText = "CSS 선택자로 선택해서 값 변경됨"

    // 두 번째 자식 div 선택
    const div2 = document.querySelector('[target-div = "css-div"] > div:last-child');

    div2.innerText = "첫 번째 요소가 아니면 querySElector() 특징 활용 못함"


    // 모든 자식 div 선택

    const divList = document.querySelectorAll('[target-div = "css-div"] > div ');
    console.log(divList);
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "10px";

    for(let i = 0 ; i < divList.length ; i++){ // 순차 접근
        divList[i].onclick = function(){
            alert(i+"번째 index 요소입니다.");
        }

    }

}


/* 카카오톡 채팅화면 만들기 */

// 입력 버튼을 누르면 채팅 출력

function readValue(){
    // 채팅이 출력되는 배경
    const bg = document.querySelector("#chatting-bg"); // id를 가져옴
    // 채팅 내용 입력 input
    const input = document.querySelector("#user-input"); 
   

    // 입력된 값이 없을 경우
    // 아무것도 없거나 공백만 적었거나

  /* 문자열.trim() : 문자열 좌우 공백을 제거 */
  if(input.value.trim().length == 0){
    alert("채팅 내용을 입력해 주세요");

    input.value = ""; // 이전 input에 작성된 값 삭제

    input.focus(); // input에 커서 활성화

    return; // 현재 수행중인 함수를 종료 + 호출한 곳으로 돌아감
  }


  // 채팅 출력
  bg.innerHTML += `<p><span>${input.value}</span></p>`;
  input.value = "";
  input.focus();
  bg.scrollTop = bg.scrollHeight;
  // bg.scrollHeight : bg 스크롤 전체 높이
  // bg.scrollTop : 스크롤 윗부분 위치
  // bg.scrollTop = 값 : 스크롤 윗부분을 값 위치로 이동 
}


/* user-input인 요소에서 키가 올라오는 동작이 감지되었을 때
올라온 키가 Enter키이면 readValue() 함수를 호출 */

// keydown : 키가 눌러졌을 때(꾹 누르고 있으면 계속 인식됨)
// keypress : 키가 눌러지는 상태일 때
// keyup : 눌러지던 키가 떼어졌을 때(1회만 인식)


document.querySelector("#user-input")
.addEventListener("keyup",function(e){
// e : 이벤트 객체(발생한 이벤트 정보를 담고있는 객체)
// e.key : 입력한 키 반환
// console.log(e.key);

if(e.key=="Enter"){
    readValue(); // Enter키가 눌러지면 채팅창 출력 함수 호출
}
});
