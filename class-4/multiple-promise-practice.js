const promise1 = Promise.resolve('Promise 1 resolved');

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 3000);
});

// Promise.all example
Promise.all([promise1, promise2])
    .then((response) => {
        console.log("\nPromise.all example:");
        console.log(response); // Returns an array of all the fulfilled values
    });

// Promise.any example
Promise.any([promise1, promise2])
.then((response) => {
    console.log("\nPromise.any example:");
    console.log(response); // Fulfills when any of the promises fulfill; rejects when all of the promises reject.
});

// Promise.race example
Promise.race([promise1, promise2])
    .then((response) => {
        console.log("\nPromise.race example:");
        console.log(response); // Returns the first resolved promise
    });

