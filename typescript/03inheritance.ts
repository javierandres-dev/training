class Computer {
  constructor(private readonly brand: string, private readonly model: string) {}

  public turnOn(): string {
    return `${this.brand} / ${this.model} is ON`;
  }

  public turnOff(): string {
    return `${this.brand} / ${this.model} is OFF`;
  }

  public working(): void {
    console.log(`${this.brand} / ${this.model} is working`);
  }
}

class Desktop extends Computer {
  // change class method for this subclass
  working(): void {
    console.log("I'm not working, I'm playing");
  }
}
class Laptop extends Computer {
  // add own method
  mousePad(): void {
    console.log("I have a mousepad");
  }
}

const pc1 = new Desktop("Apple", "iMac");
const pc2 = new Laptop("Apple", "Macbook");

console.log(pc1.turnOn());
pc1.working();
console.log(pc1.turnOff());
console.log(pc2.turnOn());
pc2.working();
pc2.mousePad();
console.log(pc2.turnOff());
