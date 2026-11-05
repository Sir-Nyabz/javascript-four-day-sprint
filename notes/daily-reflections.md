# Daily Reflections

## Day 1 – JavaScript Fundamentals

### What I learned
- JavaScript values and data types
- Variables and operators
- Conditions and loops
- Functions and return values

### Challenges completed
1. Minutes to hours
2. Grade labels
3. FizzBuzz
4. Discounted cart tax

### What I found difficult
The most difficult concept I encountered was understanding Object-Oriented Programming (OOP), particularly how classes, constructors, methods and objects work together. I initially found it challenging to understand how the this keyword refers to the current object and how the TaskManager class interacts with the Task class. I also needed more practice understanding array methods such as map(), filter() and find().

### How I solved it
I solved these difficulties by breaking the code into smaller sections and testing each part independently. I first created individual task objects using the Task class and tested their methods before introducing the TaskManager class. When errors occurred, I checked the method names, class definitions and import statements to identify what was causing the problem. I also used console.log() to inspect objects and confirm that their properties were changing as expected. Through repeated testing and debugging, I gained a better understanding of how classes and objects work together to manage data in JavaScript.

### What I can now explain
Explain how a function receives input and returns output.
Explain how loops work.
Explain why conditions are important.

### Next steps
Prepare for arrays, objects and object-oriented programming.

## Day 3 – DOM Manipulation and Browser Interaction

### What I learned
I learned how to manipulate HTML elements using the Document Object Model (DOM). I practised selecting elements, changing webpage content, handling events and collecting information from forms. I also learned how to create HTML elements dynamically and display information from my JavaScript Task Manager. Additionally, I learned how to use localStorage to save and retrieve tasks so that they remain available after refreshing the browser.

### What I found difficult
The most difficult part was connecting the Task Manager data engine to the HTML interface. I initially found it challenging to handle button events for dynamically created tasks and to understand how localStorage stores and retrieves JavaScript data.

### How I solved it
I approached the problem by testing each feature separately. I used browser Developer Tools and console messages to identify errors. I also learned to use event delegation so that one event listener could handle clicks on dynamically created buttons. To solve the data storage problem, I used JSON.stringify() to save task information and JSON.parse() to retrieve it. I then reconstructed the saved information as Task objects so their methods would remain available.

### Key takeaway
I learned how JavaScript connects webpage elements with application logic. I also gained practical experience building an interactive application and storing information in the browser.