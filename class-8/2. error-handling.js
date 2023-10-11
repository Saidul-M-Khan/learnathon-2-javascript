/**
 * ? Try-Catch-Finally
 */

// Example 1
try {
  const name = 'Saidul';
  name = 'Ratul';
} catch (error) {
  console.error('Error: ', error);
}


// Example 2
let loading = true;
try {
  const Siam = { age: 20 };
  console.log(Siam);
} catch (error) {
  console.log('Error: ', error);
} finally {
  console.log('This will always execute');
  loading = false;
}

// We can't declare try catch like this
// try console.log('True block');
// catch (e) console.log('False block');