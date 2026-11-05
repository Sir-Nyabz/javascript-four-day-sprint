// Select HTML elements
const taskForm = document.querySelector('#taskForm')
const taskTitle = document.querySelector('#taskTitle')
const taskDescription = document.querySelector('#taskDescription')
const taskPriority = document.querySelector('#taskPriority')
const dueDate = document.querySelector('#dueDate')
const message = document.querySelector('#message')

// Set today's date as the minimum allowed date
const today = new Date()
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0')
].join('-')

dueDate.min = localToday

// Listen for form submission
taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // Collect form values
    const title = taskTitle.value.trim()
    const description = taskDescription.value.trim()
    const priority = taskPriority.value
    const selectedDate = dueDate.value

    // Reset previous message
    message.textContent = ''
    message.className = ''

    // Validate task title
    if (title.length < 3) {
        message.textContent =
            'Error: Task title must contain at least 3 characters.'

        message.className = 'error'
        return
    }

    // Validate due date
    if (!selectedDate) {
        message.textContent =
            'Error: Please select a due date.'

        message.className = 'error'
        return
    }

    // Check whether due date is in the past
    if (selectedDate < localToday) {
        message.textContent =
            'Error: Due date cannot be in the past.'

        message.className = 'error'
        return
    }

    // Create task object
    const task = {
        title: title,
        description: description,
        priority: priority,
        dueDate: selectedDate
    }

    // Display successful submission
    console.log(task)

    message.textContent =
        'Success! Your task has been submitted successfully.'

    message.className = 'success'

    // Clear form
    taskForm.reset()
})