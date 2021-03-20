/**
 * Escriba un programa que pida un número entero mayor que cero
 * y calcule su factorial. El factorial es el resultado de
 * multiplicar ese número por sus anteriores hasta la unidad.
 */
const number = parseInt(prompt(`Enter a integer greater than 0: `));
if (number < 1) {
    console.log(`The number ${number} isn't greater than 0`);
} else {
    let factorial = number;
    for(let i = number - 1; i > 0; i--){
        factorial *= i;
    }
    console.log(`The factorial of ${number} is ${factorial}`);
}