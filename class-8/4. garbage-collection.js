/**
 * ? Garbage Collection
 */

// Creating some objects
let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };
let obj3 = { name: 'Object 3' };

// Creating circular reference
obj1.ref = obj2;
obj2.ref = obj3;
obj3.ref = obj1;

console.log(obj1, obj2, obj3);

obj1 = null;
obj2 = null;
obj3 = null;

console.log(obj1, obj2, obj3);