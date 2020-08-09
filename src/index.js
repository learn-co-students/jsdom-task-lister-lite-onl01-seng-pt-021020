document.addEventListener("DOMContentLoaded", () => {
    //necessary DOM elements
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");

    //new task will live on DOM
    const newTaskUl = document.getElementById("tasks");

    //event listener
    newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
    //stop form submit
    event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    appendNewTask(newTask);
    event.target.reset();
};

const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
};