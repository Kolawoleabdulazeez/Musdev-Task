//SECLECTOR
const inputTodo = document.querySelector('.input-todo');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENER
addButton.addEventListener("click",  addTodo);
todoList.addEventListener("click", deleteButton);

//FUNCTIONS
function addTodo(event){
//prevent from refresh
event.preventDefault();

//creating todoDiv
const todoDiv = document.createElement('div');
// adding class to todoDiv
todoDiv.classList.add("todo");
//creating li tag
const toList = document.createElement("li");
toList.innerText =inputTodo.value;
inputTodo.value="";
//adding class to list
toList.classList.add("todo-item");

todoDiv.appendChild(toList);

//creating delete button
const deleteButton = document.createElement("button");
const icon = document.createElement("span");
icon.classList.add("far", "fa-trash-alt");
deleteButton.appendChild(icon);
// deleteButton.innerHtml ='<i class="far fa-trash-alt"></i>';
deleteButton.classList.add("delete-button");
todoDiv.appendChild(deleteButton);


//append to list
todoList.appendChild(todoDiv);

}

function deleteButton(event){
const item=event.target; 

if (item.classList[0] === "delete-button"){
    const todo = item.parentElement;
    todo.remove();
}
}


