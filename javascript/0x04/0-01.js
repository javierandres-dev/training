/**
 * Programa una función que cuente el número de caracteres de una cadena de
 * texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */
const fn = (argv) => {
  if (typeof argv === "string") {
    let n = argv.length;
    console.log(`'${argv}' tiene ${n} caracteres.`);
  } else {
    console.warn(`'${argv}' no es una cadena de texto.`);
  }
};
fn("Hola Mundo");
fn("Hello, World!");
fn("1");
fn(1);
