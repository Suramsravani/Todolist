function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Append the new task to the list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}