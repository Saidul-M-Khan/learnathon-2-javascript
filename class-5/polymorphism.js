class Shape {
    shapeName;

    getArea() {
        return "This is a generic shape and doesn't have a specific area.";
    };

    constructor(shapeName) {
        this.name = shapeName;
    }

    getName() {
        return this.name;
    }
}

class Circle extends Shape {
    radius;

    constructor(shapeName, radius) {
        super(shapeName);
        this.radius = radius;
    }

    getArea() {
        return `Area of a ${this.name}: ${Math.PI * this.radius ** 2}`;
    };
}

class Square extends Shape {
    sideLength;

    constructor(shapeName, sideLength) {
        super(shapeName);
        this.sideLength = sideLength;
    }

    getArea() {
        return `Area of a ${this.name}: ${this.sideLength ** 2}`;
    };
}

class Triangle extends Shape {
    base;
    height;
    
    constructor(shapeName, base, height) {
        super(shapeName);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return `Area of a ${this.name}: ${(this.base * this.height) / 2}`;
    };
}

const myCircle = new Circle("Circle", 5);
console.log(myCircle.getArea());

const mySquare = new Square("Square", 4);
console.log(mySquare.getArea());

const myTriangle = new Triangle("Triangle", 4, 5);
console.log(myTriangle.getArea());