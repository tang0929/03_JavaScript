/* 입력한 색상으로 배경색 변경하기 */
const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");
const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click",function(){
    box3.style.backgroundColor = input3.value;
})

/* #input3에서 enter키 입력시 배경색 변경 */
input3.addEventListener("keyup",function(e){
// e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
// e.key : 입력된 키
if(e.key=="Enter"){
    box3.style.backgroundColor = input3.value;
}
})

// box3을 클릭하면 현재 배경색을 alert로 출력
box3.addEventListener("click",function(e){
    // e.target : 이벤트가 발생한 대상 요소(이벤트 발생 요소)

    alert(`배경색 : ${e.target.style.backgroundColor}`);
})