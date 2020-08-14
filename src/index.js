document.addEventListener("DOMContentLoaded", () => {
  //once the DOM has loaded, execute the following code.

  //grab all the necessary DOM elements
  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
  //listen for the submit button, and then createNewTask;
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  //creates a new task in an li tag
  newTask.innerText = newTaskDescription.value;
  //changes the inner text of the new task to the value of the newTaskDescription

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
