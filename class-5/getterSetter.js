class Vehicle {
    name;
    
    constructor(name) {
        this.name = name;
    }

    get getName() {
        return `Vehicle: ${this.name}`;
    }
    
    set setName(value) {
        this.name = value;
    }

}

class FourWheeler extends Vehicle {
    #brand;
    _model;
    
    constructor(name, brand, model) {
        super(name);
        this.#brand = brand;
        this._model = model;
    }

    get getBrand() {
        return `Brand: ${this.#brand}`;
    }

    get getModel() {
        return `Model: ${this._model}`;
    }
    
    set setBrand(brand) {
        this.#brand = brand;
    }

    set setModel(model) {
        this._model = model;
    }

    startEngine() {
        console.log(`Starting the engine of a ${this.name}, ${this.#brand} ${this._model}.`);
    }
}


const car = new FourWheeler();
car.setName = "Car";
car.setBrand = "Toyota";
car.setModel = "Corolla";
console.log(car.getName);
console.log(car.getBrand);
console.log(car.getModel);
car.startEngine();