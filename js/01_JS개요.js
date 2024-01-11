/* .js 파일 내부를 <script></script> 태그 내부라고 생각하면 됨 */

function externalFn(){
    alert("외부 파일에서 작성된 externalFn() 함수가 호출")
}

/* JS 맛보기 */
/* 버튼 클릭 시 글자+배경색이 반전 */

const body = document.querySelector("body"); /* body 태그를 선택 */

/* 다크모드 활성화 함수 */
function darkmode(){
    body.style.color="white"; /* 흰색 글자로 변경 */
    body.style.backgroundColor = "black" /* 검정 배경으로 변경 */

}
/* 라이트모드 활성화 함수 */
function lightmode(){
    body.style.color="black"; /* 검은 글자로 변경 */
    body.style.backgroundColor = "white" /* 하얀 배경으로 변경 */

}                                                                                                                                                            