export class Task {
    constructor(title, description, priority = 'medium') {
        this.id = Date.now() + Math.random()
        this.title = title
        this.description = description
        this.priority = priority
        this.completed = false
        this.createdAt = new Date().toISOString()
    }

    complete() {
        this.completed = true
    }

    reopen() {
        this.completed = false
    }

    updateTitle(newTitle) {
        this.title = newTitle
    }

    updateDescription(newDescription) {
        this.description = newDescription
    }

    updatePriority(newPriority) {
        this.priority = newPriority
    }

    getStatus() {
        return this.completed ? 'Completed' : 'Pending'
    }

    getAge() {
        const createdTime = new Date(this.createdAt).getTime()
        const currentTime = Date.now()

        return Math.floor((currentTime - createdTime) / 60000)
    }

    getDetails() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            completed: this.completed,
            status: this.getStatus(),
            createdAt: this.createdAt
        }
    }
}