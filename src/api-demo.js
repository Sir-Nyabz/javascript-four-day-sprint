import { fetchSuggestedTasks } from "./api.js"

async function displaySuggestedTasks() {
    try {
        console.log("Loading tasks...")

        const tasks = await fetchSuggestedTasks()

        console.log("Suggested tasks:")

        tasks.forEach((task) => {
            console.log(task.title)
        })
    } catch (error) {
        console.error("Error:", error.message)
    }
}

displaySuggestedTasks()