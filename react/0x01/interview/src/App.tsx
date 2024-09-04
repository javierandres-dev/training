import "./App.css";

function App() {
  // clase
  class Animal {
    private _sound: string = "";

    public get sound(): string {
      return this._sound;
    }

    public set sound(value: string) {
      this._sound = value;
    }

    constructor(sound: string) {
      this.sound = sound;
    }

    public name: string = "pluto";
    // only visible to subclasses
    protected color: string = "white";
    // don't allow external access
    private _age: string = "5";
    public get age(): string {
      return this._age;
    }
    public set age(value: string) {
      this._age = value;
    }

    public helloPublic() {
      console.log("Hello, Public!");
    }

    // only visible to subclasses
    protected helloProtected() {
      console.log("Hello, Protected!");
    }

    // don't allow external access
    private helloPrivate() {
      console.log("Hello, Private!");
    }

    public runHelloPrivate() {
      this.helloPrivate();
    }
  }

  // object
  const animal = new Animal();
  animal.helloPublic();
  animal.runHelloPrivate();
  console.log(animal.name);
  console.log(animal.age);
  animal.age = "8";
  console.log(animal.age);

  const dog = new Animal("woof");
  console.log(dog.sound);
  const cat = new Animal("meow");
  console.log(cat.sound);

  // inheritance
  class AnimalChild extends Animal {
    public hcProtected() {
      this.helloProtected();
    }

    public logName() {
      console.log(this.name + "-");
    }
  }

  const animalChild = new AnimalChild();
  animalChild.hcProtected();
  animalChild.runHelloPrivate();
  console.log(animalChild.name);
  animalChild.logName();

  // abstract
  abstract class Person {
    name: string = "jane";

    hello(): void {
      console.log("hello, " + this.name);
    }
  }

  class Student extends Person {}

  const student = new Student();
  student.hello();

  // interface
  interface User {
    firstName: string;
    lastName: string;
  }

  const user: User = {
    firstName: "john",
    lastName: "doe",
  };
  console.log(user);

  return (
    <>
      <div>works!</div>
    </>
  );
}

export default App;
