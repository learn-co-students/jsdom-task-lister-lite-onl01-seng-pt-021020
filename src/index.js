document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener("submit", getUserInput);
});

function getUserInput(e) {
  const userInput = document.getElementById('new-task-description').value;
  e.preventDefault();
  
  const ul = document.getElementById('tasks')
  const li = document.createElement("li");
  li.innerText = userInput;
  ul.appendChild(li);
  event.target.reset();
}
