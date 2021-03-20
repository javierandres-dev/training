/**
 * Programa una función que dada una String te devuelva un Array de textos
 * separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá
 * ['hola', 'que', 'tal'].
 */
const fn = (str, separator) => {
  if (typeof str === "string") {
    console.log(str.split(separator));
  } else {
    console.warn(`'${str}' no es una cadena de texto.`);
  }
};
fn("hola que tal", " ");
fn("cómo te va?", " ");
fn(1234, " ");
fn("hola que tal", "");
