/**
 * ? Custom Error
 */

// Defining Custom Error
class CustomError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'CustomError';
  }
}

// Using custom error
function divide(num1, num2) {
  if (num2 === 0) {
    throw new CustomError('Division by zero is not allowed.');
  }
  return (num1 / num2);
}

divide(2, 0);