const d = document;

d.addEventListener('DOMContentLoaded', () => {
  show('Welcome');
  setName();
});

const setName = (): void => {
  const $form = d.querySelector('form'),
    $str = d.getElementById('str'),
    $num = d.getElementById('num'),
    $list = d.getElementById('list');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const str: String = (<HTMLInputElement>$str).value;
    const num: number = parseInt((<HTMLInputElement>$num).value);
    if (str.length === 0 || isNaN(num)) {
      console.log('stop');
      return;
    }
    $list.textContent = `${str}, ${num}`;
  });
};

const show = (aString: string): void => {
  d.getElementById('test').innerHTML = `${aString}`;
};

console.log('Hello, World!');
console.log('-- -- -- -- DataTypes -- -- -- --');

let anyType: any;
const numberType: number = 0;
const stringType: string = 'str';
const arrNumbers: Array<number> = [1, 2, 3, 4];
const arrStrings: Array<string> = ['a', 'b', 'c'];
const arrAny: Array<any> = [1, 'a', true, {}, []];

function types(): void {
  console.log(anyType);
  console.log(numberType);
  console.log(stringType);
  console.log(arrNumbers);
  console.log(arrStrings);
  console.log(arrAny);
}

types();

console.log('-- -- -- -- Interface -- -- -- --');
interface User {
  username: string;
  password: string;
  nickmane?: string;
}

const user1: User = { username: 'Mary', password: '1234', nickmane: 'mari' };
const user2: User = { username: 'Jhon', password: '4321' };

console.log(user1, '\n', user2);

interface Action {
  greet(): void;
}

const action1: Action = {
  greet: () => console.log('hi'),
};

action1.greet();

console.log('-- -- -- -- Functions -- -- -- --');
function fn(a: number, b: number): number {
  return a + b;
}
console.log(fn(1, 2));
const afn = (a: number, b: number): number => a * b;
console.log(afn(1, 2));
