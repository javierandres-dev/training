/**
 * Escribe un programa que pida un número entero mayor que 1
 * y que escriba si el número primo o no.
 * Un número primo es aquel que solo es divisible por sí mismo y la unidad
 */
const number = parseInt(prompt('Enter a number greater than 1: '));
let count = 0;
let is1 = undefined;
let isNumberSelf = undefined;
if (number < 2) {
    console.log(`The number ${number} isn't greater than 1!`);
} else {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count += 1;
            if (i === 1) {
                is1 = true;
            }
            if (i === number) {
                isNumberSelf = true;
            }
        }
    }
    if (count === 2 && is1 === true && isNumberSelf === true) {
        console.log(`The number ${number} is a prime number`);
    }
    else {
        console.log(`The number ${number} isn't a prime number`);
    }
}