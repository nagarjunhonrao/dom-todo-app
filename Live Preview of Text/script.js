const input = document.getElementById("input");
const live = document.getElementById("live");

input.addEventListener("input",()=>{
    live.innerText = input.value;
})