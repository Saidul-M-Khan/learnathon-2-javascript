class Animal {
  name;

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  breed;

  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

const animal = new Animal("Generic Animal");
animal.speak();

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
dog.bark();
