// Select Elements

const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList")

// Add event Listeners 

addBtn.addEventListener("click",()=>{
    const todoText = input.value;

    // Validation
    if(todoText === ""){
        alert("Please Enter a todo");
        return; // function stops here
    }

    // Create New Elemnets 

    const li = document.createElement("li");

    // Put text in Li

    li.innerText = todoText;

    // Create Delete Button

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Delete Logic

    deleteBtn.addEventListener("click",()=>{
        // Remove only that Element
        li.remove();
    });

    // Dom mein Add Karo

    // Delete button ko list ke nadar Daalo

    li.appendChild(deleteBtn);

    // li ko ul ke nadar daalo

    todoList.appendChild(li);

    // Input Reset

    input.value = "";


})



