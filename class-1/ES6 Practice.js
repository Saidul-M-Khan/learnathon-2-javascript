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
let myName = "John";
console.log(`Hello, ${myName}!`);

// Example of destructuring
const person = { name: "Saidul", age: 23 };
const { name, age } = person;
console.log(`My name is ${name} and I am ${age} years old.`);

// Example of function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const sumResult = add(1, 2);
const subResult = subtract(5, 1);
const mulResult = multiply(4, 3);
const divResult = divide(6, 2);
const result = {
  sum: sumResult,
  sub: subResult,
  mul: mulResult,
  div: divResult,
};
console.log(result);

// Example of map
const array_one = [1, 2, 3, 4, 5];
const doubled = array_one.map((item) => item * 2); // Doubles each item in the array
console.log(doubled);

// Example of filter
const array_two = [1, 2, 3, 4, 5];
const odds = array_two.filter((item) => item % 2 === 0); // Filters out odd numbers
console.log(odds);

// Example of reduce
const array_three = [1, 2, 3, 4, 5];
const sumOfArray = array_three.reduce((total, current) => total + current); // Sums all numbers in the array
console.log(sumOfArray);

// Example of class
class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  catInfo() {
    console.log(
      `Hello, My cat's name is ${this.name} and His/Her color is ${this.color}.`
    );
  }
}
const cat = new Cat("Leo", "Orange");
cat.catInfo();

// Example of object literal
const personName = "Saidul";
const personAge = 23;
const personData = {
  personName,
  personAge,
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};
