/**
 * Solicita un nombre, la edad y muestra por consola el mensaje
 * "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
 * Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
 */
let name = prompt('Enter name: ');
let age = parseInt(prompt('Enter age: '));
console.log(`Hello ${name}, you are ${age} years old and the next year you will be ${age + 1} years old.`);