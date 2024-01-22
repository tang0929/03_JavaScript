
const display = document.querySelector("#display");

const list = document.querySelectorAll("#display>span")
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

let count = 0; // 1ms마다 1씩 증가한 값을 저장할 변수

// ms 부분 : count % 100
// 1초     : (count / 100) % 60
// 1분     : (count / 100) / 60

let currInterval; // 인터벌 저장 변수
/* START 버튼 클릭시 10ms마다 display(표시되는 시간)을 증가 */
startBtn.addEventListener("click", e => {
    currentInterval = window.setInterval(() => {
        count++;
        output(); // 화면에 시간을 출력
    }, 10); // 10ms마다 적용
    e.target.disabled = true;

});


/* 시계 출력 함수 */
function output(){
    let minute = Math.floor(count / 100 / 60);
    let second = Math.floor(count / 100 % 60);
    let ms = count % 100;

    /* 아래 함수 적용 */
    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);

    
    // minute의 값과 화면에 출력된 분이 다를 경우
    if(list[0].innerText != minute)
    list[0].innerText = minute;

    // second의 값과 화면에 출력된 초가 다를 경우
    if(list[1].innerText != second)
    list[1].innerText = second;

    list[2].innerText = ms;
};




/* 한 자리 숫자인 경우 앞에 0을 붙여서 반환하는 함수 ex) 05 */

function attachZero(num){

    if(num < 10){
        return "0"+num;
    }
    else{
        return ""+num;
    }
};


/* RESET 버튼 클릭시 */
resetBtn.addEventListener("click",() => {

// currInterval 제거
window.clearInterval(currentInterval); 

// count, 출력된 시간을 모두 0으로
count = 0;
output();

// start 버튼 재활성화
startBtn.disabled = false;
});