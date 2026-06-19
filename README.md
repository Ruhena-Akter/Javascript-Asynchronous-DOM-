# JavaScript Asynchronous Programming & DOM Project Assignment

# PART A: THEORY QUESTIONS

## 1. Execution Context

### What is Execution Context in JavaScript?

Execution Context is the environment in which JavaScript code is executed. It contains information about variables, functions, and the current scope.

### Explain Global Execution Context and Function Execution Context

Global Execution Context (GEC):

The Global Execution Context is created when a JavaScript program starts running. It is the default execution context where global variables and functions are stored. There is only one Global Execution Context in a program.

Function Execution Context (FEC):

A Function Execution Context is created whenever a function is called. Each function call creates its own execution context containing local variables, function arguments, and execution details. It is removed after the function finishes execution.

### What Happens During the Creation Phase and Execution Phase?

### Creation Phase:

* Memory is allocated for variables and functions.
* Variables declared with var are initialized with undefined.
* Function declarations are stored in memory.
* The scope chain is created.

### Execution Phase:

* JavaScript executes code line by line.
* Variables receive their actual values.
* Functions are called and executed.
* Expressions and statements are evaluated.
## 2. Event Loop

### What is the JavaScript Event Loop?

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations by coordinating the Call Stack and Callback Queue.

### Why is JavaScript Called Single Threaded?

JavaScript is called single-threaded because it executes one task at a time using a single Call Stack.

### Relationship Between Call Stack, Web APIs, Callback Queue, and Event Loop

1. Functions are executed in the Call Stack.
2. Asynchronous tasks such as `setTimeout()` are handled by Web APIs.
3. When completed, callbacks move to the Callback Queue.
4. The Event Loop checks whether the Call Stack is empty.
5. If empty, it moves callbacks from the Callback Queue to the Call Stack.


## 3. setTimeout() and setInterval()

### What is setTimeout()?

`setTimeout()` executes a function once after a specified delay.

Example:
```javascript
setTimeout(() => {
   console.log("Hello");
}, 3000);
```

### What is setInterval()?

`setInterval()` repeatedly executes a function after a specified interval.

Example:
```javascript
setInterval(() => {
  console.log("Running...");
}, 1000);
```
### Difference Between setTimeout() and setInterval()

| setTimeout()        | setInterval()           |
| ------------------- | ----------------------- |
| Executes once       | Executes repeatedly     |
| Stops automatically | Continues until cleared |

### Program to Print "Hello World" After 3 Seconds
```javascript
setTimeout(() => {
  console.log("Hello World");
}, 3000);
```
### Digital Clock Using setInterval()
```javascript
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
```
## 4. Callback Functions

### What is a Callback Function?

A callback function is a function passed as an argument to another function and executed later.

### Why Are Callbacks Used?

* To handle asynchronous operations.
* To make code more flexible and reusable.

### Example
```javascript
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Moni");
}

processUser(greet);
```

## 5. Promise

### What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

### Promise States

**Pending**

-Initial state.
-Operation is not completed yet.

**Fulfilled**

-The operation completed successfully.

**Rejected**

-The operation failed.

### Promise That Resolves After 2 Seconds
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});
```
### Handling Success and Error
```javascript
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```
## 6. Async/Await

### What is async?

The `async` keyword is used to declare an asynchronous function.

### What is await?

The `await` keyword pauses execution until a Promise is resolved.

### How Does async/await Improve Code Readability?

- Makes asynchronous code look synchronous.
- Reduces callback nesting.
- Makes code easier to read and maintain.

### Converting a Promise-Based Example to Async/Await

**Promise Version**
```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

getData().then((data) => {
  console.log(data);
});
```
**Async/Await Version**
```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();
```
