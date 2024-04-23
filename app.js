// Select all buttons with the class 'btn' and add a click event listener to each
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest parent element with the class 'fillin' (the task container)
        const task = button.closest('.fillin');
        // Check which list the task is currently in
        if (task.parentElement.classList.contains('box2')) {
            // If the task is in the 'Done' list (box2), move it to the 'To Do' list (box1)
            document.querySelector('.box1').appendChild(task);
        } else {
            // If the task is in the 'To Do' list (box1), move it to the 'Done' list (box2)
            document.querySelector('.box2').appendChild(task);
        }
    });
});
