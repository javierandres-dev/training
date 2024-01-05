"use strict";
class Computer {
    brand;
    model;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    turnOn() {
        return `${this.brand} / ${this.model} is ON`;
    }
    turnOff() {
        return `${this.brand} / ${this.model} is OFF`;
    }
    working() {
        console.log(`${this.brand} / ${this.model} is working`);
    }
}
class Desktop extends Computer {
    working() {
        console.log("I'm not working, I'm playing");
    }
}
class Laptop extends Computer {
    mousePad() {
        console.log("I have a mousepad");
    }
}
const pc1 = new Desktop("Apple", "iMac");
const pc2 = new Laptop("Apple", "Macbook");
console.log(pc1.turnOn());
pc1.working();
console.log(pc1.turnOff());
console.log(pc2.turnOn());
pc2.working();
pc2.mousePad();
console.log(pc2.turnOff());
