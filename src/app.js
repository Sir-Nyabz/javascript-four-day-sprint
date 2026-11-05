const heading = document.querySelector('h1')
const welcomeMessage = document.querySelector('#welcomeMessage')
const button = document.querySelector('#changeMessageButton')
const dateDisplay = document.querySelector('#dateDisplay')

console.log(heading)
console.log(welcomeMessage)
console.log(button)

heading.textContent = 'My Personal Task Manager'

welcomeMessage.textContent =
    'I am learning how to manipulate the DOM with JavaScript.'

dateDisplay.textContent = new Date().toDateString()

heading.textContent = 'My Personal Task Manager'

welcomeMessage.textContent =
    'I am learning how to manipulate the DOM with JavaScript.'

dateDisplay.textContent = new Date().toDateString()