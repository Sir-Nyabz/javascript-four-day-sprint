try {
    manager.addTask('', 'This task has no title')
} catch (error) {
    console.error(error.message)
}