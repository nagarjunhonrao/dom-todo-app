const btn = document.getElementById("btn");
const para = document.getElementById("toggle");


btn.addEventListener("click",()=>{
    if(para.style.display === 'none'){
        para.style.display = 'block';
        btn.textContent = "Hide"
    }else{
        para.style.display = 'none';
        btn.textContent = "Show"
    }
})