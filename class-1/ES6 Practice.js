// Example of let and const
let x = 1;
const y = 2;
console.log(x, y);

// Example of arrow function
const sum = (a, b) => a + b;
console.log(sum(1, 2));

// Example of spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Example of template literals
let myName = 'John';
console.log(`Hello, ${myName}!`);

// Example of destructuring
const person = { name: 'Saidul', age: 23 };
const { name, age } = person;
console.log(`My name is ${name} and I am ${age} years old.`);