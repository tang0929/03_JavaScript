



let success = document.getElementById("up");
let fail = document.getElementById("down");


function roll(){
    const randomNumber = Number(Math.floor(Math.random()*100)+1);
    
    let success = 0;
    let fail = 0;


    if (randomNumber >= 0 && randomNumber <=30){
        alert("성공");
        success++;
        up.innerText = success;
        
        
    }
    else if(randomNumber > 30 && randomNumber <= 100){
        alert("실패");
        fail++;
        down.innerText = fail;
     
    }
    
}

