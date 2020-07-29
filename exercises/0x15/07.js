/**
 * Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares
 * y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de
 * los números del primer array por un número aleatorio entre 1 y 10,
 * si el resultado es par guarda ese número en el array de pares y
 * si es impar en el array de impares. Muestra por consola: -la multiplicación
 * que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de
 * pares e impares
 */
const numbers = [1, 2, 3, 4, 5];
let evenNumbers = [];
let oddNumbers = [];
for (let number of numbers) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    let multiplication = number * randomNumber;
    console.log(`${number} x ${randomNumber} = ${multiplication}`);
    if (multiplication % 2 === 0) {
        evenNumbers.push(multiplication);
    }
    else {
        oddNumbers.push(multiplication);
    }
}
console.log(`Even numbers: ${evenNumbers}\nOdd numbers: ${oddNumbers}`);