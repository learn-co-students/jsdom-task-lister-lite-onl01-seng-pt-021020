document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  // New Task Submit Event
  form.addEventListener('submit', (event) => {
    let newTaskForm = form.elements['new-task-description'];
    let newTask = newTaskForm.value;
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = newTask + "<button onclick=''>X</button>";
    ul.appendChild(li);
    event.preventDefault();
  })

});
