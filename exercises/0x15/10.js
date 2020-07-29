/**
 * Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"]
 * determinar si un color introducido por el usuario a través de un prompt
 * se encuentra dentro del array o no.
 */
const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];
const color = prompt('Enter a color: ');
const exist = colors.includes(color);
if (exist) {
    console.log(`The color "${color}" exists in the array`);
} else {
    console.log(`The color "${color}" doesn't exist in the array`);
}