// Optional Chaining
const user = {
    name: "Saidul",
    address: {
      street: "383/1 Free School Street",
    },
  };
  
  const street = user.address?.street;
  console.log(street);
  
  // Nullish Coalescing Operator
  const defaultValue = "Default Value";
  const userInput = null;
  const value = userInput ?? defaultValue;
  console.log(value);
  