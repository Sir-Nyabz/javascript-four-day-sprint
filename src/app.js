// 1. Select all four HTML elements
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");
const button = document.getElementById("submitButton");
const input = document.getElementById("userInput");

// Select the output paragraph
const output = document.getElementById("output");

// 2. Change the heading text
heading.textContent = "Welcome to JavaScript DOM Manipulation";

// 3. Change the paragraph text
paragraph.textContent = "You are learning how JavaScript interacts with HTML.";

// 4. Change the button text
button.textContent = "Display Name";

// 5. Display the input text when the button is clicked
button.addEventListener("click", function () {
    const enteredText = input.value;

    output.textContent = "You entered: " + enteredText;
});