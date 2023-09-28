class GrandFather {
    eyeColor;
    constructor(eyeColor) {
        this.eyeColor = eyeColor;
    }
    grandfatherProperty() {
        console.log(`Grandfather's property: \n\tEye Color: ${this.eyeColor}`);
    }
}

class Father extends GrandFather {
    body;
    constructor(eyeColor, body) {
        super(eyeColor);
        this.body = body;
    }
    fatherProperty() {
        console.log(`\n\nFather's property: \n\tEye Color: ${this.eyeColor}, \n\tBody Shape: ${this.body}`);
    }
}

class Son extends Father {
    hairColor;
    constructor(eyeColor, body, hairColor) {
        super(eyeColor, body);
        this.hairColor = hairColor;
    }
    sonsProperty() {
        console.log(`\n\nSon's Property: \n\tEye Color: ${this.eyeColor}, \n\tBody Shape: ${this.body},\n\tHair Color:${this.hairColor}`);
    }
}

const grandfather = new GrandFather();
const father = new Father();
const son = new Son("black", "slim", "black");

son.grandfatherProperty();
son.fatherProperty();
son.sonsProperty();

