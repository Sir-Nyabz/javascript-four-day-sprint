import { fetchSuggestedTasks } from "./api.js"

const API_URL = "https://jsonplaceholder.typicode.com/todos"
const taskManager = new TaskManager()

// Dashboard elements
const totalTasksElement = document.querySelector("#total-tasks")
const completedTasksElement = document.querySelector("#completed-tasks")
const pendingTasksElement = document.querySelector("#pending-tasks")

// API elements
const loadSuggestionsButton = document.querySelector("#load-suggestions")
const loadingIndicator = document.querySelector("#loading-indicator")
const apiMessage = document.querySelector("#api-message")
const suggestedTasksContainer = document.querySelector("#suggested-tasks")

// Store the suggestions retrieved from the API
let suggestedTasks = []

// Update dashboard statistics
function updateDashboard() {
    const tasks = taskManager.getAllTasks()

    const total = tasks.length

    const completed = tasks.filter(
        (task) => task.completed === true
    ).length

    const pending = tasks.filter(
        (task) => task.completed === false
    ).length

    totalTasksElement.textContent = total
    completedTasksElement.textContent = completed
    pendingTasksElement.textContent = pending
}

// Check whether a task already exists
function taskAlreadyExists(title) {
    const normalizedTitle = title.trim().toLowerCase()

    return taskManager.getAllTasks().some(
        (task) => task.title.trim().toLowerCase() === normalizedTitle
    )
}

// Display messages
function displayApiMessage(message, type = "") {
    apiMessage.textContent = message
    apiMessage.className = type
}

// Display suggested tasks
function renderSuggestedTasks() {
    suggestedTasksContainer.innerHTML = ""

    suggestedTasks.forEach((suggestion) => {
        const item = document.createElement("div")
        item.className = "suggestion-item"

        const title = document.createElement("span")
        title.textContent = suggestion.title

        const button = document.createElement("button")
        button.dataset.taskId = suggestion.id

        const alreadyAdded = taskAlreadyExists(suggestion.title)

        button.textContent = alreadyAdded
            ? "Already added"
            : "Add to My Tasks"

        button.disabled = alreadyAdded

        item.appendChild(title)
        item.appendChild(button)

        suggestedTasksContainer.appendChild(item)
    })
}

// Load suggestions from API
loadSuggestionsButton.addEventListener("click", async () => {
    try {
        loadSuggestionsButton.disabled = true

        loadingIndicator.classList.remove("hidden")

        displayApiMessage("")

        suggestedTasksContainer.innerHTML = ""

        suggestedTasks = await fetchSuggestedTasks()

        renderSuggestedTasks()

        displayApiMessage(
            "Suggested tasks loaded successfully.",
            "success-message"
        )
    } catch (error) {
        console.error("API Error:", error)

        displayApiMessage(
            error.message || "Something went wrong. Please try again.",
            "error-message"
        )
    } finally {
        loadingIndicator.classList.add("hidden")

        loadSuggestionsButton.disabled = false
    }
})

// Add a suggested task to TaskManager
suggestedTasksContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button")

    if (!button) return

    const taskId = Number(button.dataset.taskId)

    const suggestion = suggestedTasks.find(
        (task) => task.id === taskId
    )

    if (!suggestion) return

    // Prevent duplicate tasks
    if (taskAlreadyExists(suggestion.title)) {
        displayApiMessage(
            "This task has already been added.",
            "error-message"
        )

        renderSuggestedTasks()
        return
    }

    try {
        taskManager.addTask(
            suggestion.title,
            "Added from suggested tasks",
            "medium"
        )

        // Save and refresh the existing task list
        saveTasks(taskManager.getAllTasks())
        renderTasks()

        // Refresh dashboard and suggestion buttons
        updateDashboard()
        renderSuggestedTasks()

        displayApiMessage(
            "Task added to your task list successfully.",
            "success-message"
        )
    } catch (error) {
        displayApiMessage(
            error.message || "Unable to add this task.",
            "error-message"
        )
    }
})

// Show initial dashboard values
updateDashboard()

export async function fetchSuggestedTasks() {
    // Check whether the browser is offline
    if (!navigator.onLine) {
        throw new Error(
            "You appear to be offline. Please check your internet connection."
        )
    }

    let response

    try {
        response = await fetch(`${API_URL}?_limit=5`)
    } catch (error) {
        throw new Error(
            "Unable to connect to the server. Please check your internet connection."
        )
    }

    // Check the HTTP response
    if (!response.ok) {
        throw new Error(
            `The server could not retrieve tasks. Error: ${response.status}`
        )
    }

    let tasks

    try {
        tasks = await response.json()
    } catch (error) {
        throw new Error(
            "The server returned an invalid response. Please try again."
        )
    }

    // Validate the returned data
    if (
        !Array.isArray(tasks) ||
        !tasks.every(
            (task) =>
                task &&
                typeof task.id === "number" &&
                typeof task.title === "string" &&
                task.title.trim() !== ""
        )
    ) {
        throw new Error(
            "The server returned data in an unexpected format."
        )
    }

    return tasks
}