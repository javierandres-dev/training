"use strict";
class Vehicle {
    brand;
    year;
    color;
    constructor(b, y, c) {
        this.brand = b;
        this.year = y;
        this.color = c;
    }
    turnOn() {
        return `${this.brand} / ${this.year} / ${this.color} is ON`;
    }
    turnOff() {
        return `${this.brand} / ${this.year} / ${this.color} is OFF`;
    }
}
const vehicle1 = new Vehicle("Seat", 2011, "red");
const vehicle2 = new Vehicle("Chevrolet", 2006, "silver");
console.log(vehicle1);
console.log(vehicle1.turnOn());
console.log(vehicle1.turnOff());
console.log(vehicle2);
console.log(vehicle2.turnOn());
console.log(vehicle2.turnOff());
class Motorcycle {
    brand;
    year;
    color;
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }
    turnOn() {
        return `${this.brand} / ${this.year} / ${this.color} is ON`;
    }
    turnOff() {
        return `${this.brand} / ${this.year} / ${this.color} is OFF`;
    }
}
const motorcycle1 = new Motorcycle("Yamaha", 2020, "blue");
const motorcycle2 = new Motorcycle("Suzuki", 2021, "yellow");
console.log(motorcycle1);
console.log(motorcycle1.turnOn());
console.log(motorcycle1.turnOff());
console.log(motorcycle2);
console.log(motorcycle2.turnOn());
console.log(motorcycle2.turnOff());
