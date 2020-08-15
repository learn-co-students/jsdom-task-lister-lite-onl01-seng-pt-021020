document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('submit').addEventListener('click', function(e) {
		e.preventDefault();
		const newText = document.getElementById('new-task-description').value;
		const task = document.getElementById('tasks');
		task.appendChild(document.createElement('li')).innerHTML = newText;
	});
  document.getElementById('create-task-form').reset();
});
