//Website (webapplication)

// HTML-- structure of webpage
//CSS-- styling=> lok and feel things - color, font, size, position, etc
//JavaScript-- functinality or behavior of webpage
//JavaScript is a single thereaded language, which means it can only do one thing at a time. It is synchronous in nature, meaning it executes code line by line. However, JavaScript can also handle asynchronous operations using callbacks, promises, and async/await syntax. This allows for non-blocking code execution, enabling tasks like fetching data from an API or reading files without freezing the main thread.
// Synchronous code executes in a sequential manner, where each line of code waits for the previous one to finish before executing. This can lead to blocking behavior, especially when dealing with time-consuming operations like network requests or file I/O.

console.log("Start of synchronous code");
console.log("This line will execute after the previous one");
console.log("End of synchronous code");

//In real time synchrnous execution wont work

// Asynchronous code allows for non-blocking execution, enabling tasks to run concurrently without waiting for each other to complete. 
// This is particularly useful for operations that involve I/O, such as fetching data from a server or reading files. Asynchronous code can be implemented using callbacks, promises, and async/await syntax.
//API Calls
//Reading files
//Database operations
//Timers (setTimeout, setInterval)
//Downloading resources (images, scripts, etc.)
//Promises and async/await are modern approaches to handling asynchronous operations in JavaScript. Promises represent a value that may be available now, in the future, or never. They provide a cleaner way to handle asynchronous code compared to callbacks, allowing for better error handling and chaining of operations. The async/await syntax builds on promises, making asynchronous code look and behave more like synchronous code, improving readability and maintainability.
//Playwright
console.log("Start of asynchronous code");

setTimeout(() => {
  console.log("This line will execute after a delay");
}, 5000);   

console.log("End of asynchronous code");

// We have a problem with Async code also
//Async also very dangerous
// All Playwright commands are async in nature, so we need to handle them properly using await or then() method to ensure that the code executes in the desired order. If we don't handle async code properly, it can lead to unexpected behavior and bugs in our tests.
//lot of techniques to make depedent asnc calls into sequential
//callbacks, promises, async/await, chaining promises, etc

//In Playwright, we can use async/await to handle asynchronous operations in a more readable and maintainable way. By using the await keyword, we can pause the execution of the code until the promise is resolved, allowing us to write code that looks synchronous while still being non-blocking. This makes it easier to reason about the flow of our tests and ensures that our assertions are made at the right time.

// Callbacks are functions that are passed as arguments to other functions and are executed after a certain operation is completed. 
// They can be used to handle asynchronous operations, but they can lead to callback hell if not managed properly.
//callback

// Pyramid of doom  
