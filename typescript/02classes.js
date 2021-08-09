// class
var Vehicle = /** @class */ (function () {
    // constructor
    function Vehicle(b, y, c) {
        this.brand = b;
        this.year = y;
        this.color = c;
    }
    // methods
    Vehicle.prototype.turnOn = function () {
        return this.brand + " / " + this.year + " / " + this.color + " is ON";
    };
    Vehicle.prototype.turnOff = function () {
        return this.brand + " / " + this.year + " / " + this.color + " is OFF";
    };
    return Vehicle;
}());
// instances - objects
var vehicle1 = new Vehicle("Seat", 2011, "red");
var vehicle2 = new Vehicle("Chevrolet", 2006, "silver");
// using objects
console.log(vehicle1);
console.log(vehicle1.turnOn());
console.log(vehicle1.turnOff());
console.log(vehicle2);
console.log(vehicle2.turnOn());
console.log(vehicle2.turnOff());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }
    Motorcycle.prototype.turnOn = function () {
        return this.brand + " / " + this.year + " / " + this.color + " is ON";
    };
    Motorcycle.prototype.turnOff = function () {
        return this.brand + " / " + this.year + " / " + this.color + " is OFF";
    };
    return Motorcycle;
}());
var motorcycle1 = new Motorcycle("Yamaha", 2020, "blue");
var motorcycle2 = new Motorcycle("Suzuki", 2021, "yellow");
console.log(motorcycle1);
console.log(motorcycle1.turnOn());
console.log(motorcycle1.turnOff());
console.log(motorcycle2);
console.log(motorcycle2.turnOn());
console.log(motorcycle2.turnOff());
