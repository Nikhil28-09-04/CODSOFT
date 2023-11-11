// Load tasks from local storage on page load
window.onload = function () {
  loadTasks();
};

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;
  if (task !== "") {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.innerHTML =
      task + ' <button onclick="deleteTask(' + index + ')">Delete</button>';
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
