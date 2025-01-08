document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
  
    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
  
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);
  
    // Add complete button
    taskContent.addEventListener('click', function() {
      taskItem.classList.toggle('completed');
    });
  
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });
  
    taskItem.appendChild(deleteBtn);
  
    // Append the task to the list
    taskList.appendChild(taskItem);
  
    // Clear input
    taskInput.value = '';
  });
  