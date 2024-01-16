



function createTable(){
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    const theadRow = document.getElementById("thead-row"); // 단(제목)이 작성되는 행 요소(tr 태그)
    const tbody = document.getElementById("tbody");
    
    theadRow.innerHTML = "";

    for(let dan=start; dan<=end ; dan++){
    theadRow.innerHTML += `<th>${dan}단</th>`;

}
    let str = "<tr>";
    for(let num=1 ; num <= 9 ; num++){
        let str = "";
        for(let dan=start; dan<=end; dan++){
            str+= `${dan} * ${num} = ${dan*num}`;
        }
        str += "</tr>";
    }
    tbody.innerHTML += str;
}