// Array.prototype.find()
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(num => num > 3);
console.log(found);

// Array.prototype.fill()
const emptyArray = new Array(5);
const filledArray = emptyArray.fill(0);
console.log(filledArray);
