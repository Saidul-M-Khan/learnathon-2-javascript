/*
Practice for JS Fundamentals
    Topics:
        1. JS variables and types
        2. JS Control Flow (Looping)
        3. Functions, Arrow Functions, Objects and Array
        4. JS scooping, hoisting
        5. Execution Context
        6. Polyfilling
        7. This keyword in JS
*/

/* JS Variables and Types */
// Declaring variables
var age = 30;
let name = "John";
const PI = 3.14;

// Variable types
let isStudent = true;
let hobbies = ["reading", "coding"];
let person = { firstName: "Alice", lastName: "Smith" };
console.log(typeof age);
console.log(typeof name);
console.log(typeof PI);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof person);

/* JS Control Flow (Looping): */
// Using for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Using while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Using if-else statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

/* Functions, Arrow Functions */
// Function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Arrow function
const add = (a, b) => a + b;

greet("Alice");
console.log(add(5, 3));

/* Objects and Arrays */
// Object
let student = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Array
let colors = ["red", "green", "blue"];

console.log(student.firstName);
console.log(colors[1]);

/* JS Scoping and Hoisting */
// Example of hoisting
console.log(x); // Outputs: undefined
var x = 10;

// Block-level scope with let
let y = 20;
if (true) {
  let y = 30;
  console.log(y); // Outputs: 30
}
console.log(y); // Outputs: 20 (outside the block)

/* Execution Context */
// Example of 'this' in an object method
const employee = {
  firstName: "Alice",
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};

employee.sayHello(); // Outputs: Hello, Alice!

/* Polyfilling */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (item) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === item) {
        return true;
      }
    }
    return false;
  };
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Outputs: true
console.log(numbers.includes(6)); // Outputs: false

/* This keyword in JS */
function doSomething(callback) {
  callback();
}

const myObject = {
  message: "Hello from myObject",
  logMessage: function () {
    console.log(this.message);
  },
};

doSomething(myObject.logMessage); // Outputs: undefined
