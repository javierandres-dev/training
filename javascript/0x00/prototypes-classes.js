"use strict";
// PROTOTYPE
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.formatProduct = function () {
  return `Product: ${this.name}, Price: ${this.price} `;
};
const product1 = new Product("Desktop", 400);
console.log(product1);
// CLASS
class Croduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  formatCroduct() {
    return `Product: ${this.name}, Price: ${this.price} `;
  }
}
const croduct1 = new Croduct("Laptop", 800);
console.log(croduct1);
