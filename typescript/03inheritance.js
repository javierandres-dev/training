var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computer = /** @class */ (function () {
    function Computer(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Computer.prototype.turnOn = function () {
        return this.brand + " / " + this.model + " is ON";
    };
    Computer.prototype.turnOff = function () {
        return this.brand + " / " + this.model + " is OFF";
    };
    Computer.prototype.working = function () {
        console.log(this.brand + " / " + this.model + " is working");
    };
    return Computer;
}());
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // change class method for this subclass
    Desktop.prototype.working = function () {
        console.log("I'm not working, I'm playing");
    };
    return Desktop;
}(Computer));
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // add own method
    Laptop.prototype.mousePad = function () {
        console.log("I have a mousepad");
    };
    return Laptop;
}(Computer));
var pc1 = new Desktop("Apple", "iMac");
var pc2 = new Laptop("Apple", "Macbook");
console.log(pc1.turnOn());
pc1.working();
console.log(pc1.turnOff());
console.log(pc2.turnOn());
pc2.working();
pc2.mousePad();
console.log(pc2.turnOff());
