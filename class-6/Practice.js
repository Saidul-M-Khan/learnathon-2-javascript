/* Object Creation */
  // Using Object Literal
  const person = {
    name: 'Saidul',
    age: 23,
  };
  // Using Constructor Function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const Saidul = new Person('Saidul', 23);



/* Object Cloning */
// Shallow Copy
const cloneShallow = Object.assign({}, person);
// Deep Copy (using JSON.stringify and JSON.parse)
const cloneDeep = JSON.parse(JSON.stringify(person));



/* Delete Object Property */
delete person.age;



/* Object Destructuring */
const { name, age } = person;
console.log(name); 
console.log(age);



/* Private Properties and Methods in an Object */
const myObject = (function() {
  const privateVariable = 'I am private';
  function privateFunction() {
    console.log('This is a private function');
  }
  return {
    getPrivateVariable: function() {
      return privateVariable;
    },
    publicMethod: function() {
      console.log('This is a public method');
      privateFunction();
    },
  };
})();
console.log(myObject.getPrivateVariable());
myObject.publicMethod();



/* Behavior of this Inside of an Object */
const student = {
  name: 'Saidul',
  age: 23,
  greet: function() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  },
};
student.greet();



/* Global this */
console.log(this === window);



/* Object Key-Value Pair Concept */
const man = {
  name: 'Saidul',
  age: 23,
};
for (const key in man) {
  console.log(key, man[key]);
}



/* Deep Concept of Spread Operator */
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);



/* Pure Function */
const pureAdd = (a, b) => { // Pure Function
  return a + b;
}
let flag = 0;
const impureAdd = (num) => { // Impure Function
  return (flag += num);
};
console.log(pureAdd(2, 3)); 
console.log(impureAdd(5));



/* Higher Order Function */
function multiplyBy(factor) {
  return function(x) {
    return x * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5));



/* Call, Bind, Apply */
const friend = {
  name: 'Saidul',
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
};
const otherFriend = {
  name: 'Ratul',
};
friend.greet.call(otherFriend, 'Hi');
const greetSaidul = friend.greet.bind(friend, 'Hello');
greetSaidul();