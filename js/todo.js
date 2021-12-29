const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//들어온 정보를 string으로 만들어줌 
    //parse = array로 만들어줌 
}

function deleteTodo (event){
    const li = event.target.parentElement; // event.target은 버튼인데 버튼은 부모를 갖고있다. 그걸 보여주는데 parentElement임
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //localStorage.setItem(newTodo, todo);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };  
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();


}

// function sayHello(item){
//     console.log("this is the turn of",item);
// }
// =parsedToDos.forEach((item) => console.log("this is the turn of", item));

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}