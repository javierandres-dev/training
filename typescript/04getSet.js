"use strict";
class Monitor {
    size;
    price;
    constructor(size, price) {
        this.size = size;
        this.price = price;
    }
    get getPrice() {
        return `Current price: COP${this.price}`;
    }
    set setPrice(newPrice) {
        this.price = newPrice;
    }
}
class Lg extends Monitor {
}
class Samsung extends Monitor {
}
const monitor1 = new Lg(29, 1000000);
const monitor2 = new Samsung(27, 800000);
console.log(monitor1);
console.log(monitor1.getPrice);
monitor1.setPrice = 900000;
console.log(monitor1.getPrice);
console.log(monitor2);
console.log(monitor2.getPrice);
monitor2.setPrice = 700000;
console.log(monitor2.getPrice);
