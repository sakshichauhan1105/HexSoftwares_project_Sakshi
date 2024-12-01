// script.js
document.getElementById("addButton").addEventListener("click", function() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement("li");
        
        // Add task text
        li.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;

        // Add click event to mark task as completed
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Add delete button functionality
        li.querySelector(".delete").addEventListener("click", function(e) {
            e.stopPropagation();  // Prevent the click event from marking the task as completed
            li.remove();
        });

        // Append the new task to the list
        document.getElementById("taskList").appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
});
