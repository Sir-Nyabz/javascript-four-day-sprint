import { Task, TaskManager } from './task.js'
import { loadTasks, saveTasks } from './storage.js'

const manager = new TaskManager()

const taskForm = document.querySelector('#taskForm')
const taskTitle = document.querySelector('#taskTitle')
const taskDescription = document.querySelector('#taskDescription')
const taskPriority = document.querySelector('#taskPriority')
const taskList = document.querySelector('#taskList')
const taskSummary = document.querySelector('#taskSummary')
const searchInput = document.querySelector('#searchInput')
const filterSelect = document.querySelector('#filterSelect')
const message = document.querySelector('#message')
const emptyMessage = document.querySelector('#emptyMessage')


// Display tasks on the webpage
function renderTasks() {
    const searchTerm = searchInput.value.trim().toLowerCase()
    const filter = filterSelect.value

    let tasks = manager.getAllTasks()

    if (filter === 'pending') {
        tasks = tasks.filter((task) => !task.completed)
    }

    if (filter === 'completed') {
        tasks = tasks.filter((task) => task.completed)
    }

    if (searchTerm) {
        tasks = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm)
        )
    }

    taskList.replaceChildren()

    tasks.forEach((task) => {
        const taskElement = document.createElement('article')
        taskElement.className = task.completed
            ? 'task-item completed'
            : 'task-item'

        const title = document.createElement('h3')
        title.textContent = task.title

        const description = document.createElement('p')
        description.textContent = task.description || 'No description provided.'

        const priority = document.createElement('div')
        priority.className = 'task-meta'
        priority.textContent =
            `Priority: ${task.priority} | Status: ${task.getStatus()}`

        const actions = document.createElement('div')
        actions.className = 'task-actions'

        const completeButton = document.createElement('button')
        completeButton.type = 'button'
        completeButton.className = 'complete-button'
        completeButton.dataset.action = 'complete'
        completeButton.dataset.id = task.id
        completeButton.textContent = task.completed
            ? 'Reopen'
            : 'Complete'

        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.className = 'delete-button'
        deleteButton.dataset.action = 'delete'
        deleteButton.dataset.id = task.id
        deleteButton.textContent = 'Delete'

        actions.append(completeButton, deleteButton)

        taskElement.append(title, description, priority, actions)

        taskList.append(taskElement)
    })

    emptyMessage.hidden = tasks.length > 0

    const total = manager.getAllTasks().length
    const completed = manager.getCompletedTasks().length
    const pending = manager.getPendingTasks().length

    taskSummary.textContent =
        `Total: ${total} | Completed: ${completed} | Pending: ${pending}`
}

// Add a task
taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = taskTitle.value.trim()
    const description = taskDescription.value.trim()
    const priority = taskPriority.value

    if (title.length < 3) {
        message.textContent = 'Task title must contain at least 3 characters.'
        return
    }

    try {
        manager.addTask(title, description, priority)
saveTasks(manager.getAllTasks())
        taskForm.reset()
        message.textContent = 'Task added successfully!'

        renderTasks()
    } catch (error) {
        message.textContent = error.message
    }
})

// Handle task buttons using event delegation
taskList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]')

    if (!button) return

    const id = Number(button.dataset.id)
    const action = button.dataset.action

    try {
        if (action === 'complete') {
            const task = manager.findTask(id)

            if (!task) {
                throw new Error('Task not found')
            }

            if (task.completed) {
                task.reopen()
            } else {
                manager.completeTask(id)
            }
        }

        if (action === 'delete') {
            manager.deleteTask(id)
        }

        saveTasks(manager.getAllTasks())
        renderTasks()
    } catch (error) {
        message.textContent = error.message
    }
})

// Search tasks
searchInput.addEventListener('input', renderTasks)

// Filter tasks
filterSelect.addEventListener('change', renderTasks)

// Display initial tasks
renderTasks()

const savedTasks = loadTasks()

manager.tasks = savedTasks.map((savedTask) => {
    const task = new Task(
        savedTask.title,
        savedTask.description,
        savedTask.priority
    )

    task.id = savedTask.id
    task.completed = savedTask.completed
    task.createdAt = savedTask.createdAt

    return task
})