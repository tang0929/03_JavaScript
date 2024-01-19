/* 매개 변수, 전달 인자 */

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

function print1(num,str){
    console.log(num+"은/는 "+str+"입니다.");
}

/* #btn1 클릭시 #input1의 값을 읽어와 print1() 함수 호출 */

btn1.addEventListener("click", function(){
    const value = input1.value;

    // input1에 입력이 안되었거나 빈칸만 입력된 경우
    if(value.trim().length == 0){
        console.log("숫자를 입력해 주세요");
        return; //함수 종료 
    }
    
    else{
        let result;
        if(Number(value)==0){
            result = 0;
            
        }
        else if(Number(value) > 0){
            result = "양수";
        }
        else{
            result = "음수";
        }
    }
    /* 함수 호출(값 전달)
    전달되는 값 순서 신경쓰기 중요 */
    print1(value,result);

});

/* 매개 변수로 배열 전달하기 */
function arrayTest(arr){
    // 전달 받은 배열의 모든 요소 출력하기
    for(let i = 0; i<arr.length; i++){
        if (arr[i] == '멜론'){
            arr[i] == '딸기';
        
        console.log(i + "번 인덱스 값",arr[i]);
    }
}
}
// #btn2a 클릭 되었을 때 arrayTest()함수 호출
document.querySelector("#btn2a").addEventListener("click",function(){
    const arr1 = [10,20,30];
    const arr2 = ['사과','바나나','멜론'];

    const temp = 100;
    /* 참조 */
    // 왜 멜론이 아니라 딸기 출력?
    //  -> arrTest(arr2) 호출 시 arr2 배열을 통째로 복사해서 전달하는 것이 아닌
    // arr에 저장된 주소만 보내서 함수를 수행했다.

    // arrTest() 함수에서 arr2와 같은 배열을 참조해서 수정
    // 함수 수행 후 돌아 와서도 참조하고 있던 배열의 2번 인덱스 값이 변화되었음.

    arrayTest(arr1);
    arrayTest(arr2);
    console.log("arr2[2] : ", arr2[2]);

    
})

/* 매개 변수로 요소 전달 */
function b2bFn(el){
    // 매개변수 el(element) : 이벤트가 발생한 요소(HTML에서 this)
    el.style.backgroundColor = "yellow";
}

/* 매개 변수로 함수 전달 */

function print2(otherFn){

    // otherFn == 밑에 후술할 sumFn
    console.log("3 + 4 = " + otherFn(3,4))

}

const btn2c = document.querySelector("#btn2c");

btn2c.addEventListener("click",function(){
// 함수도 변수에 저장 가능
const sumFn = function(a,b){
    return a+b; // 함수를 끝냄 + 값(a+b)을 가지고 호출한 곳으로 돌아감
}

// 매개 변수로 함수 전달
print2(sumFn);

});

/* return 확인하기 1 */
function sumFn(arr){ // 전달된 배열 요소의 합을 반환
    let sum = 0;
    for(let i = 0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}

// 전달받은 num를 x제곱하여 반환
function pow(num,x){
    let result = 1; // 곱할때마다 결과가 0이 되지 않기 위해 1로 초기화
    for(let i = 0;i < x;i++){
        result *= num;
    }
    return result;

}

const btn3a = document.querySelector("#btn3a");
btn3a.addEventListener("click",function(){
    const numbers = []; // 비어있는 배열 생성
    // 배열.push(값) : 배열의 마지막 요소로 값을 추가

    numbers.push(30);
    numbers.push(50);
    numbers.push(4);
    numbers.push(pow(2,5)); // push(32)

    console.log("합계 : ",sumFn(numbers));

});


/* 화살표 함수 */

const arrowList = document.querySelectorAll(".arrow");

/* 화살표 함수 기본 형태 */

arrowList[0].addEventListener("click",()=>{
    alert("화살표 함수 기본 형태 연습");
})

/* 매개 변수가 1개인 경우 */
arrowList[1].addEventListener("click",e=>{

    // e : 이벤트 객체(모든 이벤트 관련 정보가 담겨져 있는 객체)
    // e.target : 이벤트가 발생한 요소

    e.target.style.backgroundColor="skyblue";
    
    print3(arr =>{
        let result = 1;

        for(let i = 0 ; i < arr.length ; i++){
            result *= arr[i];

        }
        return result;
    });

});

function print3(otherFn){
    const arr = [1,2,3,4];
    console.log(otherFn(arr));
    
}


/* return 한 줄만 작성된 경우 */
arrowList[2].addEventListener("click",() => {
    twoNumberPlus((a,b) => {return a+b});
});

function twoNumberPlus(otherFn){

    const input1 = Number(prompt("첫 번째 값"));
    const input2 = Number(prompt("두 번째 값"));

    alert(otherFn(input1,input2));
}


/* return 한 줄인데 object를 반환하는 경우 */

arrowList[3].addEventListener("click",()=>{
    printObject((name, age)=>{ 
        return {"name":name,"age":age};
        // JS 객체 { K:V, K:V}
    });

});

function printObject(otherFn){
    const obj = otherFn("홍길동",20);
    console.log("obj.name : "+obj.name);
    console.log("obj.age : "+obj.age);

}

/* 즉시 실행 함수 확인 */
(()=>{
    console.log("즉시 실행 함수");
    console.log("즉시 실행 함수2");
})();