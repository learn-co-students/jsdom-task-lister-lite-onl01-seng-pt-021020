document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  let taskList = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", e => {
    e. preventDefault();
    let newTask = document.getElementById("new-task-description");
    let newListItem = document.createElement("li");
    newListItem.innerHTML = `${newTask.value} <button data-description="${newTask.value}">X</button>`;
    taskList.appendChild(newListItem)

  });
});
