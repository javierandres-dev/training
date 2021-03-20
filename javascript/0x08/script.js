'use strict';
class InputDevice {
  constructor(inputType, brand) {
    this._inputType = inputType;
    this._brand = brand;
  }
  set inputType(inputType) {
    this._inputType = inputType;
  }
  get inputType() {
    return this._inputType;
  }
  set brand(brand) {
    this._brand = brand;
  }
  get brand() {
    return this._brand;
  }
}

class Mouse extends InputDevice {
  static countMouse = 0;
  constructor(inputType, brand) {
    super(inputType, brand);
    this._id = ++Mouse.countMouse;
  }
  get id() {
    return this._id;
  }
  toString() {
    return `Mouse --> ID: ${this._id}\tType: ${this.inputType}\tBrand: ${this._brand}`;
  }
}

class Keyboard extends InputDevice {
  static countKeyboard = 0;
  constructor(inputType, brand) {
    super(inputType, brand);
    this._id = ++Keyboard.countKeyboard;
  }
  get id() {
    return this._id;
  }
  toString() {
    return `Keyboard --> ID: ${this._id}\tType: ${this.inputType}\tBrand: ${this.brand}`;
  }
}

class Monitor {
  static countMonitor = 0;
  constructor(brand, size) {
    this._brand = brand;
    this._size = size;
    this._id = ++Monitor.countMonitor;
  }
  get brand() {
    return this._brand;
  }
  get size() {
    return this._size;
  }
  get id() {
    return this._id;
  }
  set brand(brand) {
    this._brand = brand;
  }
  set size(size) {
    this._size = size;
  }
  toString() {
    return `Monitor --> ID: ${this._id}\tBrand: ${this._brand}\tsize: ${this._size}`;
  }
}

class Computer {
  static countComputer = 0;
  constructor(name, monitor, keyboard, mouse) {
    this._id = ++Computer.countComputer;
    this._name = name;
    this._monitor = monitor;
    this._keyboard = keyboard;
    this._mouse = mouse;
  }
  toString() {
    return `Computer --> ID: ${this._id}
Name: ${this._name}
Monitor: ${this._monitor}
Keyboard: ${this._keyboard}
Mouse: ${this._mouse}`;
  }
}

class Order {
  static countOrder = 0;
  constructor() {
    this._id = ++Order.countOrder;
    this._computers = [];
  }
  get id() {
    return this._id;
  }
  addComputer(computer) {
    this._computers.push(computer);
  }
  getOrder() {
    let computersOrder = '';
    for (let computer of this._computers) {
      computersOrder += `\n${computer}`;
    }
    console.log(`Order: ${this._id}, Computer: ${computersOrder}`);
  }
}

const mouse1 = new Mouse('USB', 'HP');
console.log(mouse1);
console.log(mouse1.toString());
const mouse2 = new Mouse('PS\\2', 'Dell');
console.log(mouse2.toString());
mouse1.brand = 'Lenovo';
console.log(mouse1.toString());

const keyboard1 = new Keyboard('USB', 'HP');
console.log(keyboard1);
console.log(keyboard1.toString());
const keyboard2 = new Keyboard('PS\\2', 'Dell');
console.log(keyboard2.toString());
keyboard1.brand = 'Lenovo';
console.log(keyboard1.toString());

const monitor1 = new Monitor('LG', '27"');
console.log(monitor1);
console.log(monitor1.toString());
const monitor2 = new Monitor('Acer', '19"');
console.log(monitor2.toString());
monitor1.brand = 'HP';
console.log(monitor1.toString());

const computer1 = new Computer('Apple', monitor1, keyboard1, mouse1);
console.log(computer1);
console.log(`${computer1}`);
const computer2 = new Computer('Microsoft', monitor2, keyboard2, mouse2);
console.log(computer2);
console.log(computer2.toString());

const order1 = new Order();
order1.addComputer(computer1);
order1.getOrder();
const order2 = new Order();
order2.addComputer(computer2);
order2.getOrder();
order1.addComputer(computer2);
order1.getOrder();
