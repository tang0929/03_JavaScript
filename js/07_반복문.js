function check1(){

    // for([1]초기식 ; [2]조건식 ; [4]증감식){
    //   [3]조건식이 true인 경우 반복 수행할 코드;
    // }
  
    let result = ""; // 빈 문자열
    for(let num=1 ; num <= 5  ; num++){
  
      result += num; // 복합 대입 연산자 
      // result = reuslt + num;
    }
    
    // result = "12345";
    console.log("result : ", result);
  
  }
  
  
  function check2(){
    // 1 부터 10까지 출력하기
  
    for(let num=1 ; num <= 10 ; num++){
      console.log("num : ", num);
    }
  }

  function check3(){
    for(let num=1;num<=20;num++){
        console.log("num : ",num);
    }
  }

  function check4(){
    for(let num=5;num<=15;num++){
        console.log("num : ",num);
    }
  }

  function check5(){
    for(let num=1;num<=30;num+=2){
        console.log("num : ",num);
    }
  }

  function check6(){
    for(let num =1 ;num<=10;num++){
      let sum = 0;
      sum += num;
        console.log("num : ",sum);
    }
  }

  function sumfn(){
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력할 요소(result1)인 요소를 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start부터 end까지 1씩 증가하는 for문
    for(let num=start;num<=end;num++){
      sum += num;

    }
    result1.innerText = sum;
  }

/* 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기 */
function executeFn2(){
  const start = Number(document.getElementById("inputNumber2-1").value);
  const end   = Number(document.getElementById("inputNumber2-2").value);
  
  // 증가값
  const val   = Number(document.getElementById("inputNumber2-3").value);

  // 결과 출력할 ul 요소
  const ul = document.getElementById("result2");

  ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제

  for(let num=start ;num<=end ;num+=val ){
    ul.innerHTML = `<li>${num}</li>`;
    // ul 요소 내부에 li 요소를 누적

  }
}
// 요소.innerText = "<li>문자열</li>";
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 그대로 보여줌)

// 요소.innerHTML = "<h2>문자열</h2>"
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석해서 화면에 출력)

/* 구구단 2단 출력하기 */

function check7(){
  for(let i=1 ;i<=9 ;i++){
    console.log(`2 * ${i} = ${2 * i}`);
  }
}


/* 입력받은 단이 2~9 사이가 아닐경우 "2~9 사이만 입력해주세요 출력" */




/* 입력한 단 출력하기 */
function execute3(){

  const number = Number(document.getElementById("input3").value);
  const ul = document.getElementById("result3");
  ul.innerHTML = "";/* 기존의 값 삭제 */

  // if( !(input >= 2 && input <= 9)  ){
  if(number < 2 || number > 9){
    alert("2~9에서만 입력해주세요");
    return; /* 함수를 종료하고 호출한 곳으로 돌아감.  */

  }else{
  for(let i=1 ; i<=9; i++){
    ul.innerHTML += `<li> ${number} * ${i}= ${i*number} </li>`;
  }
}
}

function execute4(){
  // 배수
  const input = Number(document.getElementById("input4").value);
  // 모양
  const output = document.getElementById("output4").value;
  // 출력할 div
  const result = document.getElementById("result4");

  let str = "";

  for(let i = 1 ; i<=50 ; i++){

    // i가 input의 배수이면
    if(i % input == 0){
      // str에 i 대신 output을 대입

      str += output + " "; 
    }
else{
    str += i + " "; /* 한칸씩 떨어뜨려놓게 하기 */
  }
// i가 10의 배수가 될때마다 줄바꿈
if(i % 10 == 0){
  str += "<br>";
}
  result.innerHTML = str;

}
}

/* 다음 모양 출력하기
12345
12345
12345
12345 */

function check8(){
  for(let y=1 ; y<=4;y++){
  let str = "";
  for(let x = 1 ; x <= 5 ; x++){
    str += x;
  }

  console.log(str);
  console.log("");
}
}

function check9(){

  for(let y=1 ; y <= 5 ; y++){

    let str = "";
    for(let x = 1 ; x <= y ; x++){
      str += x;
    } 
    console.log(str);
  }

}


/* 감소하는 for문 */
function check10(){
  // 5 4 3 2 1

  for(let num = 5 ; num>=1 ; num--)
  console.log(num);
}


/* 
  12345
  1234
  123
  12
  1
 */
  function check11(){

    for(let row = 5 ; row >= 1 ; row--){
  
      let str = "";
      for(let col=1 ; col <= row ; col++){
        str += col;
      }
      console.log(str);
    }
  }

  function check12(){

   
  
    
  // 이중 for문을 한번만 사용하기
 
  for(let row = 1 ; row <=7 ; row++){

    let end = 0;
    if(row <= 4) {
     end = row; }
    else {
        end = 7 - row + 1;}

    let str = "";
    for(let col = 1; col<=end ; col++){
        str += col;
    }

    console.log(str);

  }


  /* 카운트를 이용해 출력하기 */

  function check13(){
    let count = 1; // 카운트를 위한 변수 선언
    for(let row = 1 ; row <= 3; row++){
    let str = "";
    for(let col = 1 ; col <= 4 ; col++){
      str += count + " ";
      count++; // count 값을 1 증가
    }
  
    console.log(str);
  }
  }
}

/* 1부터 100 사이에 입력된 수의 배수가 몇 개 있나 count */
function check14(){
  // 입력된 배수
  const input = Number(document.getElementById("input14").value);
  // 결과 출력할 span
  const result = document.getElementById("result14");

  // 세기 위한 변수 선언(아직 세어보지 않았으므로 0개 부터 시작)
  let count = 0;
  for(let num = 1; num <= 100; num++){
    // num이 input의 배수가 맞는경우
    if( num % input == 0 ){
      count++; // count 1 증가
    }
  }
  result.innerText = input + "의 배수 : "+ count + "개";

}

function check15(){
  // count 이용해서 출력
  let count = 0;
  for(let row=1 ; row <= 7 ; row++){
    if(row <= 4){
      count++;
    }
    else{
      count--;
    }
    let str = "";
    for(let col=1 ; col <= count; col++){
      str += col;
    }
    console.log(str);
  }
}

/* while문 확인 */

function check16(){
  let val;

  // 취소를 누르기 전까지 반복. 취소를 누르면 끝
  while(val !== null){
    val = prompt("입력 후 확인");
    console.log(val);
    /* 동일 비교 연산자 */
    // !== -> 값, 자료형이 모두 다른 경우 true
    // === -> 값, 자료형이 모두 같은 경우 true
  // 확인 -> 입력한 값
  // 취소 -> Null

  }
}

/* 메뉴 주문하기 */

function check17(){

  const gimbap = 3000;
  const ramen = 3500;
  const donkatsu = 5000;

  // 주문 개수 카운트
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // prompt로 입력한 값을 저장할 변수 선언
  let input; // undefined

  while(input !== null){
    input = prompt("메뉴 번호를 입력하시오.");
  switch(input){
    case '1': gCount++;
    break;
    case '2': rCount++;
    break;
    case '3': dCount++;
    break;
    case null: alert("주문 완료!");
    break;
    default : alert("메뉴에 작성된 번호만 입력해주세요.") // 위 해당되는게 없을경우
    break;
  }
  }
  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = gCount*gimbap + rCount*ramen + dCount*donkatsu;
  alert(`총 가격은 ${sum}원`);
}

/* while문을 for문처럼 */

function check18(){
  // 1부터 10까지 출력
  for(let num = 1; num <= 10;num++){
    console.log(num);
  }
  let num2 = 1;
  while(num2<11){
    console.log(num2);
    num2++;
  }

  // 10부터 1까지 1씩 감소(while)
  let x = 10;
  while(x > 0){
    console.log(x);
    x--;
  }
}

