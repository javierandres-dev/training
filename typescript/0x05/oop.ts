// 1. Classes
// Classes are blueprints for creating objects with shared structure and behavior.
class AnimalBase {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// 2. Objects
// Objects are instances of classes, holding their own data.
const animalDog = new AnimalBase("Rex");
animalDog.speak(); // Output: Rex makes a sound.

// 3. Inheritance
// Inheritance lets you create new classes based on existing ones.
class AnimalDog extends AnimalBase {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const beagle = new AnimalDog("Buddy");
beagle.speak(); // Output: Buddy barks.

// 4. Encapsulation
// Encapsulation restricts direct access to some of an object's components.
class PersonClass {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}
const alice = new PersonClass(30);
console.log(alice.getAge()); // Output: 30

// 5. Polymorphism
// Polymorphism lets you use a unified interface for different data types.
function makeItSpeak(animal: AnimalBase) {
  animal.speak();
}
makeItSpeak(animalDog); // Rex makes a sound.
makeItSpeak(beagle); // Buddy barks.

// 6. Abstraction
// Abstraction hides complex details and shows only essentials.
abstract class OopShape {
  abstract area(): number;
}
class Circle extends OopShape {
  constructor(private radius: number) {
    super();
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(2);
console.log(circle.area()); // Output: 12.566370614359172

// 7. Interfaces
// Interfaces define contracts for classes without implementation.
interface Movable {
  move(): void;
}
class OopCar implements Movable {
  move() {
    console.log("Car is moving");
  }
}
const car = new OopCar();
car.move(); // Output: Car is moving

// These are the core OOP concepts in TypeScript, each helping you write organized, reusable, and maintainable code.  --copilot

/* ========================================================================== */
console.log("================================================================");
/* ========================================================================== */

// Object literal
const person = {
  name: "Anne", // primitive value of type string
  surname: "Doe",
  age: 28, // primitive value of type number
  address: {
    // object type containing the keys "city" and "country"
    city: "Melbourne",
    country: "Australia",
  },
};
console.log(person);

// Classes, Attributes, and Methods
class User {
  name: string; // attribute
  surname: string; // attribute
  age: number; // attribute

  // constructor method (special method)
  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  // method to obtain the full name: "Lucas Garcez"
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

// Instance
const john = new User("John", "Doe", 28);
console.log(john.name);
console.log(john.getFullName());
console.log(john);

const maria = new User("Sofia", "Smith", 19);
console.log(maria.name);
console.log(maria.getFullName());
console.log(maria);

// Interfaces
// An interface defines a contract for the structure of an object or class.
interface Printable {
  print(): void;
}

// A class can implement an interface by providing the required methods.
class Invoice implements Printable {
  constructor(private amount: number) {}

  print() {
    console.log(`Invoice amount: $${this.amount}`);
  }
}

const invoice = new Invoice(150);
invoice.print(); // Output: Invoice amount: $150

// You can also use interfaces to type objects directly.
const report: Printable = {
  print() {
    console.log("Report printed!");
  },
};
report.print(); // Output: Report printed!

// Example: Interface with properties and methods
interface IProduct {
  name: string;
  price: number;
  getInfo(): string;
}

// A class implementing the Product interface
class Book implements IProduct {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `Book: ${this.name}, Price: $${this.price}`;
  }
}

const myBook = new Book("TypeScript Basics", 25);
console.log(myBook.getInfo()); // Output: Book: TypeScript Basics, Price: $25

// You can also use the interface to type objects directly
const pen: IProduct = {
  name: "Blue Pen",
  price: 2,
  getInfo() {
    return `Pen: ${this.name}, Price: $${this.price}`;
  },
};
console.log(pen.getInfo()); // Output: Pen: Blue Pen, Price: $2

// Inheritance – Superclass and Subclass
class VehicleSuperClass {
  move() {
    console.log("The vehicle moves.");
  }
}

class CarSubClass extends VehicleSuperClass {
  honk() {
    console.log("Beep beep!");
  }
}

const myCar = new CarSubClass();
myCar.move(); // Output: The vehicle moves.
myCar.honk(); // Output: Beep beep!

// Polymorphism
class AnimalPoly {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class DogPoly extends AnimalPoly {
  speak() {
    console.log("Woof!");
  }
}

class CatPoly extends AnimalPoly {
  speak() {
    console.log("Meow!");
  }
}

// Function that uses polymorphism
function makeAnimalSpeak(animal: AnimalPoly) {
  animal.speak();
}

const dogPoly = new DogPoly();
const catPoly = new CatPoly();

makeAnimalSpeak(dogPoly); // Output: Woof!
makeAnimalSpeak(catPoly); // Output: Meow!

// Encapsulation
class Cake {
  private flavor: string; // private property

  constructor(flavor: string) {
    this.flavor = flavor;
  }

  // public method to access the private property
  getFlavor(): string {
    return this.flavor;
  }

  // public method to change the flavor
  setFlavor(newFlavor: string): void {
    this.flavor = newFlavor;
  }
}

const myCake = new Cake("Chocolate");
console.log(myCake.getFlavor()); // Output: Chocolate

myCake.setFlavor("Vanilla");
console.log(myCake.getFlavor()); // Output: Vanilla

// myCake.flavor = "Strawberry"; // Error: Property 'flavor' is private and only accessible within class 'Cake'

// Example: TypeScript Access Modifiers (public, private, protected)

class UserAccount {
  public username: string; // Can be accessed from anywhere
  private password: string; // Can only be accessed within this class
  protected email: string; // Can be accessed in this class and subclasses

  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  public checkPassword(pass: string): boolean {
    return this.password === pass;
  }
}

class AdminAccount extends UserAccount {
  showEmail() {
    // Can access protected member
    console.log(`Admin email: ${this.email}`);
  }
}

const userAccount = new UserAccount("john_doe", "1234", "john@example.com");
console.log(userAccount.username); // OK: public
// console.log(userAccount.password); // Error: private
// console.log(userAccount.email);    // Error: protected
console.log(userAccount.checkPassword("1234")); // Output: true

const admin = new AdminAccount("admin", "adminpass", "admin@example.com");
admin.showEmail(); // Output: Admin email: admin@example.com

// Abstraction
abstract class EmployeeClass {
  constructor(public name: string) {}

  abstract getSalary(): number; // Abstract method

  describe(): void {
    console.log(`Employee: ${this.name}`);
  }
}

class Developer extends EmployeeClass {
  constructor(name: string, private monthlySalary: number) {
    super(name);
  }

  getSalary(): number {
    return this.monthlySalary;
  }
}

const dev = new Developer("Alice", 5000);
dev.describe(); // Output: Employee: Alice
console.log(dev.getSalary()); // Output: 5000

// Abstract Class
abstract class AbsClaAnimal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log("The animal moves.");
  }
}

class MyDog extends AbsClaAnimal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const myNewDog = new MyDog();
myNewDog.makeSound(); // Output: Woof!
myNewDog.move(); // Output: The animal moves.

// https://www.freecodecamp.org/news/learn-object-oriented-programming-in-typescript/
