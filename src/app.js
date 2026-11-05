const taskForm = document.querySelector('#taskForm')
const taskTitle = document.querySelector('#taskTitle')
const taskDescription = document.querySelector('#taskDescription')
const taskPriority = document.querySelector('#taskPriority')
const message = document.querySelector('#message')

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = taskTitle.value.trim()
    const description = taskDescription.value.trim()
    const priority = taskPriority.value

    if (!title) {
        message.textContent = 'Please enter a task title.'
        return
    }

    console.log({
        title,
        description,
        priority
    })

    message.textContent = 'Task information collected successfully!'

    taskForm.reset()
})