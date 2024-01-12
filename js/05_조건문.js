/* 양수인지 검사 */

const input1 = document.getElementById("input1");

function check1(){
    const value = Number(input1.value);
    if (value > 0){
        alert("양수입니다.");
    }
    if (value <= 0){
        alert("양수가 아닙니다.");
    }

}

/* if-else 홀짝 판별 */

// 난수 발생은 math.random() 이용. 
// 아무것도 설정하지 않은random 범위는 0이상 1미만
function check2(){
    const randomNumber = Math.floor(Math.random()*101);
    if (randomNumber % 2 !=0 ){
        alert(randomNumber+"는 홀수입니다.");
    }
    else{
        alert(randomNumber+"는 짝수입니다.");
    }

}
function check3(){
    const randomNumber=Math.floor(Math.random()*7) - 3;
    let message = randomNumber + "은/는";
    if(randomNumber == 0){
        message += " 0입니다.";
    }
    else if(randomNumber > 0){
        message += " 양수입니다.";
    }

    else {
        message += " 음수입니다.";
    }
alert(message);
}


const inputAge = document.getElementById("inputAge");



function check4(){
    const age = Number(inputAge.value);
    console.log("age = ",age);

    /* 빈 문자열 ("",'') : 내용이 없는 문자열 */
    /* "문자열".length : 문자열 길이 */


    if(inputAge.value.length == 0 ){/* 입력된 문자길이가 0 = 입력 안했을 때 */
    alert("값을 입력해주세요.");
}
else
{
    if(!(age >= 0 && age <= 150)){ /* 0~150사이가 아닌경우 */
        alert("잘못 입력하셨습니다.")
    }
   

    else if(age >= 0 && age <=13){
        alert("어린이");
    }
    else if(age <= 19){
        alert("청소년");
    }
    else if(age <= 150){
        alert("성인");
    }
    
}
}


/* switch 문을 이용한 계산기 */

const number1 = document.getElementById("number1"); // input
const number2 = document.getElementById("number2"); // input
const CalcResult = document.getElementById("CalcResult"); // span

function calc(op){
    // 매개변수 op
    // 함수 호출시 전달되는 값을 저장하는 변수
    // ex) calc('+') // 함수 호출
    // '+' 값이 op 변수에 저장되어짐

    console.log("op : ", op);

    const v1 = Number(number1.value);
    const v2 = Number(number2.value);


    // switch 버전
    // () 안은 "식"으로 다양한 값이 나타날 수 있는 변수 혹은 계산식
    let result; /* 결과 저장 변수 선언 */
    switch(op){
        case '+': result = v1 + v2; break; /* break문은 switch문을 멈춤. 작성하지 않으면 break가 있을때 까지 계속 넘어감 */
        case '-': result = v1 - v2; break;
        case '*': result = v1 * v2; break;
        case '/': result = v1 / v2; break;
        case '%': result = v1 % v2; break;
        default : result = "잘못된 연산자"; /* 맞는 case가 없을 경우 적용할 기본값 (else) */


    }
    CalcResult.innerText = result;

    // if문 버전
    // op가 +
    // if(op == '+'){
    //     CalcResult.innerText = v1 + v2;
    // }
    // else if(op == '-'){
    //     CalcResult.innerText = v1 - v2;
    // }
    // else if(op == '*'){
    //     CalcResult.innerText = v1 * v2;
    // }
    // else if(op == '/'){
    //     CalcResult.innerText = v1 / v2;
    // }
    // else if(op == '%'){
    //     CalcResult.innerText = v1 % v2;
    // }
    // else{
    //     CalcResult.innerText = "잘못된 연산자";
    // }

}

