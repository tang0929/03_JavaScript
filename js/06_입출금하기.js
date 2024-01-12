// prompt 사용 연습

function test(){
    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null
    if(password == null){
        alert("취소");
    }
    else{
        if(password == '1234'){
            alert("비밀번호 일치");
        }
        else{
            alert("비밀번호 틀림");
        }
    }

}

let balance = 10000;

const amount = document.getElementById("amount")
const password = '1234';

function deposit(){
    const deposit = Number(amount.value);
    balance = balance + amount;
    alert("입금되었습니다.");
    
}

function withdrawal(){
    const v2 = Number(amount.value);
    const password = prompt("비밀번호를 입력하세요");
    if(password != '1234'){
        alert("비밀번호가 일치하지 않습니다.");
    }
    else{
        if (amount > balance){
            alert("출금 잔액이 잔액보다 클 수 없습니다.");
        }
        else if (amount <= balance){
            alert(amount+"원이 출급되었습니다. 남은 잔액 : "+ balance+"원");
        }
    }

}
