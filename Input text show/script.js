const btn = document.querySelector("#btn")
const txt = document.querySelector("#txt")
const output = document.querySelector("#output")

btn.addEventListener("click",()=>{
    output.innerText = txt.value;
})

// input.value = txt.value ham koi bhi variable name le sakte hai har time input hi ho aisa nai hai