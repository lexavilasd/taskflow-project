const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", function(e) {

e.preventDefault();

const taskText = input.value.trim();

if(taskText === "") return;

addTask(taskText);

input.value = "";

saveTasks();

});

function addTask(text) {

const li = document.createElement("li");
li.classList.add("task");

li.textContent = text;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

deleteBtn.addEventListener("click", function() {

li.remove();

tasks = tasks.filter(task => task !== text);

saveTasks();

});

li.appendChild(deleteBtn);

list.appendChild(li);

tasks.push(text);

}

function saveTasks() {

localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks() {

const storedTasks = localStorage.getItem("tasks");

if(storedTasks) {

tasks = JSON.parse(storedTasks);

tasks.forEach(task => addTask(task));

}

}

loadTasks();

