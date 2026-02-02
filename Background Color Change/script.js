const btn = document.querySelector("#btn");
const clr = document.querySelector("#clr")

btn.addEventListener("click",()=>{
    clr.style.backgroundColor = "red"
    document.body.style.backgroundColor = "yellow"
})