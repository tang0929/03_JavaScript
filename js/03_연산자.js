/* 변수 선언 */

// document : HTML 문서(파일) 내에서
// get Element : 요소를 얻는다
// ById : 아이디가 일치하는

// document.getElementById -> HTML 문서 내에서 (  )와 아이디가 일치하는 요소를 얻어온다.

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

/* 두 수를 더해서 화면에 출력하는 함수 */
function plusFn(){
    // input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;
    console.log(value1, value2);
    console.log("두 수의 합 : ",Number(value1)+Number(value2));

    // input 요소에 작성된 값은 무조건 string 형태이기 때문에 그냥 더하면 이어써짐
    // 문자열(string)을 숫자(number)로 변환하는 코드를 수행
    // 데이터 파싱(data parsing) : 데이터의 종류를 바꿈

    /* 숫자만 작성된 문자열을 숫자로 바꾸기 */
    // Number("123");

    // 두 수의 합을 아이디가 calcResult인 요소의 내부 글자로 대입하기

    result.innerText = Number(value1) + Number(value2);
}

/* 빼기 함수 */
function minusFn(){
    // string으로 얻어온 값을 바로 number로 변환하여 변수에 대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1 : ",value1,typeof value1);
    console.log("value2 : ",value2,typeof value2);

    result.innerText=value1-value2;
}

/* 곱하기 함수 */
function multiFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
   
    result.innerText= value1 * value2;
}

/* 나누기 함수 */
function divFn(){
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
   
    result.innerText= value1 / value2;
}

/* 나머지 연산 함수 */
function modFn(){
    // 나머지 연산(%)은 나누기 계산 시 몫이 정수인 부분까지만 계산하고 남은 나머지 값을 출력한다.
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
   
    result.innerText= value1%value2;


}

/* 3개 더하기 */

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total")

function totalFn(){
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);

    total.innerText = value1 + value2 + value3;
}

// 증가/감소 연산자 (++ --)

// 증가, 감소할 수를 저장할 변수로 선언
let count = 0; // const로 선언하면 값이 고정되어 증감시킬 수 없으므로 let을 사용

//문서 내에서 id가 result2인 요소를 얻어와 result변수에 대입

const result2 = document.getElementById("result2");


// 1 증가

function increase(){
    count++; // 또는 ++count
    result2.innerText = count;
}
// 1 감소

function decrease(){
    count--; // 또는 --count
    result2.innerText = count;
}

/* 전위, 후위 연산 확인하기 */
function check1(){
    // 함수 밖, 안은 구분되는 공간 취급. 안/밖은 변수명이 중복되어도 서로 다름.
    let count = 100;
    // 전위 연산 확인
    console.log("++count : ", ++count); // 101
    console.log("++count : ", ++count);
    console.log("++count : ", ++count);
    console.log("-------------------");
    console.log("--count : ", --count);
    console.log("--count : ", --count);
    console.log("--count : ", --count);
    
    // 다른 연산보다 먼저 수행
    // count 값이 먼저 증가, 감소된 이후에 console에 출력됨
    count = 50;
    // 후위 연산 확인
    console.log("count++ : ", count++); //50 출력 후 51
    console.log("후위 연산 후 count : ", count); // 51
    console.log("count-- : ", count--); //51 출력 후 50
    console.log("후위 연산 후 count : ", count); // 51
    console.log("-------------------");
    let a = 10;
    let b = 5;
    let c = ++a * b--;

    console.log("a는",a,"b는",b,"c는 ",c);



    // 다른 연산이 끝나고 마지막에 수행


}
