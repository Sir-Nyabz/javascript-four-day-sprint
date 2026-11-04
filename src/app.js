

import { Task } from './task.js'

const task1 = new Task(
    'Learn JavaScript',
    'Practise arrays, objects and classes',
    'high'
)

const task2 = new Task(
    'Complete assignment',
    'Finish the JavaScript exercises',
    'medium'
)

console.log(task1.getDetails())
console.log(task2.getDetails())


task1.complete()

console.log('After completing task:')
console.log(task1.getDetails())

task1.reopen()

console.log('After reopening task:')
console.log(task1.getDetails())

task1.updateTitle('Master JavaScript')

console.log('After updating title:')
console.log(task1.getDetails())