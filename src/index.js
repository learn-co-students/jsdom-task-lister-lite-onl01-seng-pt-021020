// want your dom to load before ______


// 3. add callback function
// 4. Append 

document.addEventListener("DOMContentLoaded", () => {
  // 1. get form
  const form = document.querySelector('#create-task-form')
  // 2. add event listener and 
  form.addEventListener('submit', getUserInput)

});

function getUserInput(e) {
  const userInput = document.getElementById('new-task-description').value 
  console.log(userInput)
  e.preventDefault()
  // 'e' is coming from the event. 
  const li = document.createElement('li')
  li.innerText = userInput
  document.getElementById('tasks').appendChild(li)
}

// need to call the function getUserInput => add an event listener