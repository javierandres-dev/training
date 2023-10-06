export class Task {
  constructor(_id: string, name: string, completed: boolean) {
    this._id = _id;
    this.name = name;
    this.completed = completed;
  }
  _id?: string;
  name: string;
  completed: boolean;
}

export class Product {
  constructor(
    _id: string,
    name: string,
    description: string,
    imgPath: string,
    price: number
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.price = price;
  }
  _id?: string;
  name: string;
  description: string;
  imgPath: string;
  price: number;
}
