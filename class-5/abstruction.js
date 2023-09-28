class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new TypeError("Cannot construct Vehicle instances directly");
    }
  }

  start() {
    throw new Error("Method 'start()' must be implemented.");
  }

  stop() {
    throw new Error("Method 'stop()' must be implemented.");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Starting car...");
  }

  stop() {
    console.log("Stopping car...");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Starting bike...");
  }

  stop() {
    console.log("Stopping bike...");
  }
}

const car = new Car();
car.start();
car.stop();

const bike = new Bike();
bike.start();
bike.stop();
