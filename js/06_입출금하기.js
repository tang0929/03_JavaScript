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
const password = '1234';    

const output = document.getElementById("output"); 
const amount = document.getElementById("amount");   

output.innerText = balance; 

function deposit(){


  if(amount.value.length == 0){
    alert("금액을 입력하세요");
  }
  else{
    balance += Number(amount.value);
    output.innerText = balance;

    amount.value = ''; // input에 작성된 값 제거
  }
}


function withdrawal(){

  if(amount.value.length == 0){
    alert("금액을 입력하세요");

  }else{
    
    const password = prompt("비밀번호를 입력하세요");
  
    if(password == null){
      alert("취소");
  
    }
    else{

      if(password != '1234'){
        alert("비밀번호가 일치하지 않습니다.");
      }else
      { 

        const money = Number(amount.value);
  
        if(money > balance){
          alert("출금 금액이 잔액보다 클 수 없습니다");

        } 
        else{
  
          balance -= money;
          output.innerText = balance;
          amount.value = ''; 
    

          alert(money+"원이 출금 되었습니다. 남은 잔액은 "+ balance +"원")
        }
      }
    }
  }
}