let tasks = ["laundry", "wash dishes"];

function showTasks() {
    let tasksListOl = document.getElementById("task-list");
    tasksListOl.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        tasksListOl.appendChild(li);
    }
}
function addTask() {
    let task = prompt("Enter your task: ");
    tasks.push(task);
    showTasks();
}
function clearTask() {
    tasks = [];
    showTasks();
}
function removeTask() {
    let tasknum = prompt("What number task do you want to remove? ");
    tasks.splice(Number(tasknum) - 1, 1);
    showTasks();
}

function prioritizeTask() {
    let task = prompt("Enter your task: ");
    let taskListOl = document.getElementById("task-list");
    let listItems = taskListOl.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] == task) {
            listItems[i].style.color = "red";
        }
    }
}
