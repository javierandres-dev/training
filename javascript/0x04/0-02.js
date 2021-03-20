/**
 * Programa una función que te devuelva el texto recortado según el número de
 * caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */
const fn = (str, num) => {
  if (isNaN(num) === true) {
    console.warn(`'${num}' no es un número.`);
  }
  if (typeof str === "string") {
    console.log(str.slice(0, num));
  } else {
    console.warn(`'${str}' no es una cadena de texto.`);
  }
};
fn("Hola Mundo", 4);
fn("Hello, World!", 8);
fn("987654321", 2);
fn(1234, 8);
fn("Hola Mundo", "Hi");
