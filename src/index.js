document.addEventListener("DOMContentLoaded", () => {
  // your code here  
  let form = document.getElementById("create-task-form");
  let ul = document.getElementById("tasks");
  let task = document.getElementById("new-task-description");

  
  function addTask(e){
    let li = document.createElement('li')
    ul.appendChild(li).innerHTML = `${task.value} `
    let button = document.createElement('button')
    li.appendChild(button).innerHTML = 'x';
    e.target.reset();
    e.preventDefault()
  }

  ul.addEventListener("click", function(e){
    let tgt = e.target;
    if (tgt.tagName === "BUTTON") {
      tgt.parentNode.remove();
    }
  });

  form.addEventListener("submit", addTask);
});
