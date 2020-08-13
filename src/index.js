document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', submitHandler)
});

function submitHandler(e) {
    let input = document.getElementById('new-task-description').value
    e.preventDefault();

    // create Element
    const li = document.createElement('li');
    li.innerText = input;
    // Insert Value
    document.getElementById('tasks').appendChild(li);
    // Clear String
    document.getElementById('new-task-description').value = '';
}
