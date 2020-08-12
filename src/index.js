document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector('form#create-task-form input[type=submit]')

  submit.addEventListener('click', addTaskToList)

  function addTaskToList(event) {
    event.preventDefault()

    const newTask = document.querySelector('input#new-task-description')
    const taskList = document.querySelector('ul#tasks')

    const task = document.createElement('li')

    taskList.appendChild(task)
    task.textContent = newTask.value

    newTask.value = ''
  }
});
