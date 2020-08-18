document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', submitPrevent)
});

function submitPrevent(e) {
  let input = document.getElementById('new-task-description').value
  e.preventDefault();

  const li = ocument.createElement('li');
  li.innerText = input;
  document.getElementById('tasks').appendChild(li);
   
}
