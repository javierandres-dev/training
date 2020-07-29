/**
 * Escribe un programa que permita ir introduciendo una serie indeterminada
 * de números mientras su suma no supere 50. Cuando esto ocurra,
 * se debe mostrar el total acumulado y el contador de cuantos números se han
 * introducido
 */
let sum = 0, count = 0;
while (sum < 51) {
    count += 1;
    const number = parseInt(prompt(`Enter a number: `));
    sum += number;
}
console.log(`You entered ${count} number(s), The total of sum is ${sum}`);