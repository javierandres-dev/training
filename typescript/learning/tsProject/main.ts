console.log('Works!');
const otherString: string = 'Hello';
const fn = () => true;

/* DATA TYPES */
// String
let aString: string;
aString = 'x';
aString = "'foo'";
aString = 'bar';
aString = `${otherString}, World!`;
console.log('aString:', aString);

// Number
let aNumber: number = 10;
aNumber = 3.14;
aNumber = 9;
aNumber = 8;
aNumber = 0xff;
aNumber = 10 + 3.14 + 9 + 8 + 0xff;
console.log('aNumber:', aNumber);

// Boolean
let aBoolean: boolean = true;
aBoolean = false;
aBoolean = 10 > 5;
aBoolean = fn();
console.log('aBoolean:', aBoolean);

// Any
let aAny: any;
aAny = 'hi';
aAny = 0;
aAny = true;
aAny = () => console.log("I'm an arrow function");
console.log('aAny:', aAny);

// Array of numbers
let numberArr: number[] = [];
numberArr = [1, 2, 3];
numberArr = [3.14, 0.1, 0xaa];
console.log('numberArr:', numberArr);

// Array of strings
let stringArr: string[];
stringArr = ['Sunday', 'Monday', 'Tuesday'];
stringArr.push('Wednesday');
console.log('stringArr:', stringArr);

// Array of booleans
let booleanArr: boolean[];
booleanArr = [true, false];
console.log('booleanArr:', booleanArr);

// Array of any
let anyArr: any[];
anyArr = ['xyz', 100, true, {}];
console.log('anyArr:', anyArr);

// Object
let objSimple = { price: 100 };
objSimple = { price: 200 };
console.log('objSimple:', objSimple);

let objLiteral: { name: string; completed: boolean };
objLiteral = { name: 'read a book', completed: false };
console.log('objLiteral:', objLiteral);

// Custom type
type Product = {
  name: string;
  price: number;
  available: boolean;
};

let aProduct: Product = {
  name: 'book',
  price: 110,
  available: true,
};
console.log('aProduct:', aProduct);

const printProduct = (product: Product) => console.log(product);
printProduct(aProduct);

const printIsAvalidProduct = (product: any): boolean => {
  let res = null;
  product.name && product.price && product.available
    ? (res = true)
    : (res = false);
  return res;
};

let result = printIsAvalidProduct(aProduct);
console.log('result:', result);
result = printIsAvalidProduct(aString);
console.log('result:', result);
