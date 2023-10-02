function Car(color, name) {
	this.color = color;
	this.name = name;
}

Car.prototype.getColor = function () {
	return this.color;
};

Car.prototype.getName = function () {
	return this.name;
};

const car1 = new Car("Red", "BMW");
console.log(car1);
const car2 = new Car("Black", "Ford");
console.log(car2);