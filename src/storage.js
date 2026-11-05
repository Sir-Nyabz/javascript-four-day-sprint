const STORAGE_KEY = 'javascript-sprint-tasks'

export function saveTasks(tasks) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
        console.error('Unable to save tasks:', error)
        throw new Error('Your tasks could not be saved.')
    }
}

export function loadTasks() {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY)

        if (!savedTasks) {
            return []
        }

        const tasks = JSON.parse(savedTasks)

        if (!Array.isArray(tasks)) {
            return []
        }

        return tasks
    } catch (error) {
        console.error('Unable to load tasks:', error)
        return []
    }
}

export function clearTasks() {
    localStorage.removeItem(STORAGE_KEY)
}
