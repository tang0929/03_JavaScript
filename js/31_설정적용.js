


const apply = document.querySelector("#apply")

apply.addEventListener("click",() =>{
const box = document.querySelector("#box");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const size = document.querySelector("#size");
const fontColor = document.querySelector("#fontColor");
const backgroundColor = document.querySelector("#backgroundColor");

const weight = document.querySelector("[name='weight']:checked")
const row = document.querySelector("[name='rowPosition']:checked");
const col = document.querySelector("[name='colPosition']:checked");


box.style.width = width.value + "px";
box.style.height = height.value + "px";
box.style.size = size.value + "px";
box.style.weight = weight.value;
if(weight != null){
    box.style.fontWeight = weight.value;
}
box.style.fontColor = fontColor.value;
box.style.backgroundColor = backgroundColor.value;
if(row != null){
    box.style.justifyContent = row.value;
}
if(col != null){
    box.style.alignItems = col.value;
}

box.textContent = content.value;

   

});


