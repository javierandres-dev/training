"use strict";
const d = document;
d.addEventListener('DOMContentLoaded', () => {
    show('Welcome');
    setName();
});
const setName = () => {
    const $form = d.querySelector('form'), $str = d.getElementById('str'), $num = d.getElementById('num'), $list = d.getElementById('list');
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const str = $str.value;
        const num = parseInt($num.value);
        if (str.length === 0 || isNaN(num)) {
            console.log('stop');
            return;
        }
        $list.textContent = `${str}, ${num}`;
    });
};
const show = (aString) => {
    d.getElementById('test').innerHTML = `${aString}`;
};
console.log('Hello, World!');
console.log('-- -- -- -- DataTypes -- -- -- --');
let anyType;
const numberType = 0;
const stringType = 'str';
const arrNumbers = [1, 2, 3, 4];
const arrStrings = ['a', 'b', 'c'];
const arrAny = [1, 'a', true, {}, []];
function types() {
    console.log(anyType);
    console.log(numberType);
    console.log(stringType);
    console.log(arrNumbers);
    console.log(arrStrings);
    console.log(arrAny);
}
types();
console.log('-- -- -- -- Interface -- -- -- --');
const user1 = { username: 'Mary', password: '1234', nickmane: 'mari' };
const user2 = { username: 'Jhon', password: '4321' };
console.log(user1, '\n', user2);
const action1 = {
    greet: () => console.log('hi'),
};
action1.greet();
console.log('-- -- -- -- Functions -- -- -- --');
function fn(a, b) {
    return a + b;
}
console.log(fn(1, 2));
const afn = (a, b) => a * b;
console.log(afn(1, 2));
