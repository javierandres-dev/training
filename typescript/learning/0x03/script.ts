/*
 OOP
 */
abstract class Animal {
  abstract sound(): void;
}

class Cat extends Animal {
  sound(): void {
    console.log("meow");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("woof");
  }
}

const cat = new Cat();
const dog = new Dog();

cat.sound();
dog.sound();

class Horse extends Animal {
  sound(): void {
    console.log("neigh");
  }
  go(how: string): string {
    return `I'm ${how}`;
  }
}

const horse1 = new Horse();
const horse2 = new Horse();
console.log(horse1.go("walking"));
console.log(horse2.go("runnig"));

interface IContact {
  name: string;
  phone: string;
}

const contact: IContact = {
  name: "jane",
  phone: "555",
};

console.log(contact);
