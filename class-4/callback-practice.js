const takeOrder = (customer, callback) => {
    console.log(`Taking order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Payment received from ${customer}`);
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 3000);
}

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
}

takeOrder('Saidul', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});