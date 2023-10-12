// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); 

// Rest Parameter
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); 

// Default Parameter
function greet(name = "Siam") {
  console.log(`Hello, ${name}!`);
}
greet(); 
greet("Ratul");
