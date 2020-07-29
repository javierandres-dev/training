/**
 * Solicita un nombre, la edad y muestra por consola el mensaje
 * "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
 * Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
 */
let name = prompt('Ingrese nombre: ');
let age = parseInt(prompt('Ingrese edad: '));
console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás ${age + 1} años.`);