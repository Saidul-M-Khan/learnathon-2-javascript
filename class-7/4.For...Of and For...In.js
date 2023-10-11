// For...Of (for iterating over values)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// For...In (for iterating over object properties)
const person = { name: "Saidul", age: 23, job: "Software Engineer" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
