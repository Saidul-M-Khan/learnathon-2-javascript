/**
 * ? Different Types of Errors in JS
 */

// Syntax Error
if (true)
  console.log('This is a syntax error');
}

const names = ['Saidul', 'Ratul', 'Siam'];
for (const name = 'Saidul' of nams) {
  console.log(name);
}

// Reference Error
console.log(school);

function foo() {
  'use strict';
  school = 'BCSIR High School';
}
foo();

// Type Error
let num = 7;
num.split();

const id = 999;
id = 777;

// Range Error
const myArray = new Array(-8);
console.log(myArray);

const date = new Date('2023-21-10').toISOString();
console.log(date);

// URI Error
const encodedUri = encodeURI('\uD420');
const decodedUri = decodeURI('%C2%C7%X');


// Internal Error
function infinityCall() {
  infinityCall();
}
infinityCall();

// Evaluation Error
eval('const name = "Saidul"; console.log(name);');
eval('console.log(age);');
