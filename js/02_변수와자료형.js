/* console.log(값) */

/* 브라우저 콘솔에 괄호() 내부의 값을 기록(출력) */

console.log(1234);

console.log("문자열은 양쪽에 쌍따옴표로 작성해야함");

console.log('JS는 홑따옴표도 문자열로 취급');


/* 변수 선언 */ 
/* 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것 */
/* 작성법 : 변수종류 변수명; */

var number1;

/* 변수에 값 대입 */
/* 선언된 변수에 값을 대입하는 것 */
/* 작성법 : 변수명 = 값; */

// A = B; /* B라는 값을 변수 A에 대입 */

/* 동일하다는 뜻의 연산자는 == */

number1 = 10;

/* 콘솔에 number1 값 출력 */
console.log(number1);

/* 변수 선언 + 대입 */
var number2 = 20;
console.log(number2);

/* number1 + number2의 값 출력 */
console.log(number1 + number2);

/* 변수에 대입한 값 변경하기 */
number1 = 300;
number2 = 400;
console.log(number1); /* 변경후 값 출력 */

/* 문자열 + 문자열/숫자/변수 == 이어쓰기 */

console.log("number1의 값 : " + number1);
console.log("number2의 값 : " + number2);


/* 괄호 내부에 ,를 작성해 각각의 값을 독립적으로 출력하기 */
console.log("number1 : ",number1,"/number2 : ",number2);



/* var, let, const의 차이점 */
/* 1. var (변수, 변수 선언 시 중복되는 변수명으로 선언 가능 ->
    먼저 선언된 변수가 나중에 선언된 변수에 덮어 씌워짐) */

    var menu = "삼겹살";
    console.log("menu : ", menu);
    var menu = "초밥";
    console.log("menu : ", menu);

/* 변수명이 중복되어 덮어쓰기되면 이전에 선언 해놓은 변수를 못쓰게 되는 문제가 생김 */


/* 2. let (변수, var의 변수명 중복 문제를 해결함) */
// let number3 = 25;
// let number3 = 50;
/* 사전에 변수명이 중복되었다고 표시함. */




// 3. const(상수, constant, 항상 같은 수)
// 한 번 값이 대입되면 새로운 값을 대입할 수 없음 오류 발생.
// Uncaught TypeError : Assignment to constant variable.

/* JS 자료형 확인하기 */

/* typeof 연산자 : 변수/값의 자료형을 출력하는 연산자 */

/* undefinded : 정의되지 않은 변수 / 값이 아직 대입되지 않았다. */

let undef;
console.log("undef : ", undef, typeof undef);

/* string(문자열) : "" 또는 '' 내부에 작성된 값 */
const name = "홍길동";
console.log("홍길동 : ",name, typeof name);

const phone = '01012341234'; // 홑따옴표
console.log("phone : ",phone,typeof phone);

const gender = 'M'; // 한 글자만 작성해도 문자열 취급
console.log("gender :", gender, typeof gender);

// number(정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 178.25;
console.log("age : ",age,typeof age);
console.log("height : ",height,typeof height);

// boolean(논리값 true/false)
const isTrue = true;
const isFalse = false;
console.log("isTrue : ",isTrue, typeof isTrue);
console.log("isFalse : ",isFalse, typeof isFalse);

/* object(객체) */
// 쉬운 버전 설명
// 값을 여러 개 저장할 수 있는 형태

// 1) 배열(array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10,20,30];
console.log("numbers : ",numbers,typeof numbers);
console.log("numbers 배열 값 중 0번째 : ",numbers[0],typeof numbers[0]);
console.log("numbers 배열 값 중 1번째 : ",numbers[1],typeof numbers[1]);
console.log("numbers 배열 값 중 2번째 : ",numbers[2],typeof numbers[2]);
/* 배열위치는 0부터 시작 */

// 2) JS 객체(object)
/* 값을 K:V (Map 형식)으로 여러개 저장하는 형태
-> {K:V, K:V, K:V} */
// K(key)   : 값을 구분하는 이름(변수명 비슷)
// V(value) : K에 대응되는 값(변수에 대입되는 값 비슷)

const user = {id : "user01", pw : "1234", username : "홍길동"};

/* 객체에 존재하는 값 하나씩 얻어오기 */
// 방법 1 : 변수명['key']
console.log("user :", user,typeof user);
console.log("user['id'] :",user['id'],typeof user['id']);
console.log("user['pw'] :",user['pw'],typeof user['pw']);

// 방법 2 : 변수명.key
console.log(user.id,user.pw,user.username);


/* 함수(function) */

// const 변수명 = function(){};
// (변수명 == 함수명)

const sumFn=function(a,b){return a+b;}

console.log(typeof sumFn);
console.log(sumFn(3,5)); /* 3+5인 8이 출력 */


