document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', getUserInput)
});

function getUserInput(e) {
  const userInput = document.getElementById('new-task-description').value
  console.log(userInput)
  e.preventDefault()

  let li = document.createElement("li");
  li.innerText = userInput
  document.getElementById("tasks").appendChild(li);
}

// const btn = document.querySelector('#form-submit-btn')
// btn.addEventListener('submit', getUserInput(e))

