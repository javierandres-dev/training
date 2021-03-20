/**
 * Programa una función que repita un texto X veces,
 * pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */
const fn = (str, num) => {
  if (typeof str !== "string") {
    console.warn(`'${str}' no es un texto.`);
  }
  if (isNaN(num) === true) {
    console.warn(`'${num}' no es un número.`);
  } else {
    //console.log(str.repeat(num));
    for(let i = 0; i < num; i++){
      console.log(str)
    }
  }
};
fn("Hola Mundo", 3);
fn("Hello, Wolrd!", 3);
fn(3, "Hi");
fn("Hola Mundo", 4);