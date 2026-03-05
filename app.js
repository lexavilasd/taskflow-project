function addTask(text){

const li = document.createElement("li");

li.className =
"flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded shadow";

li.innerHTML = `
<span>${text}</span>
<button class="text-red-500 hover:text-red-700">✖</button>
`;

const deleteBtn = li.querySelector("button");

deleteBtn.addEventListener("click", () => {

li.remove();
tasks = tasks.filter(task => task !== text);
saveTasks();

});

list.appendChild(li);

tasks.push(text);

}

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.documentElement.classList.toggle("dark");

});