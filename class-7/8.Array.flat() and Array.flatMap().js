// Array.flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);

// Array.flatMap()
const numbers = [1, 2, 3];
const doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled);
