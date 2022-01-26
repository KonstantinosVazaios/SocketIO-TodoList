import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log(socket.id); 
});

socket.on("new-todo-added", (todo) => {
    displayNewTodo(todo)
})

function displayNewTodo(todo) {
    const todoList = document.querySelector('.todo-list')
    const todoItem = document.createElement('li');
    todoItem.innerHTML = todo
    todoList.appendChild(todoItem)
}

const addBtn = document.getElementById('addBtn');

const handleAddTodo = () => {
    const todo = document.getElementById('todo');
    if (!todo.value) return;
    socket.emit('new-todo', todo.value)
    todo.value = ""
}

addBtn.addEventListener('click', handleAddTodo);

