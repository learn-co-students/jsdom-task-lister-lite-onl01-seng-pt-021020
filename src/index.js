document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#create-task-form')

  form.addEventListener('submit', createNewTask)
});

function createNewTask(event) {
  const userInput = document.getElementById('new-task-description').value
  
  console.log(userInput)
  event.preventDefault()
  const li = document.createElement('li')
  li.innerText = userInput
  
  document.getElementById('tasks').appendChild(li)
}