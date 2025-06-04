"use strict";
class Animal {
}
class Cat extends Animal {
    sound() {
        console.log("meow");
    }
}
class Dog extends Animal {
    sound() {
        console.log("woof");
    }
}
const cat = new Cat();
const dog = new Dog();
cat.sound();
dog.sound();
class Horse extends Animal {
    sound() {
        console.log("neigh");
    }
    go(how) {
        return `I'm ${how}`;
    }
}
const horse1 = new Horse();
const horse2 = new Horse();
console.log(horse1.go("walking"));
console.log(horse2.go("runnig"));
const contact = {
    name: "jane",
    phone: "555",
};
console.log(contact);
