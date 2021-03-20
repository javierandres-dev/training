/**
 * Programa una función que invierta las palabras de una cadena de texto,
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */
const fn = (str) => {
  if (typeof str === "string") {
    if (str === "") {
      console.warn("Cadena vacia");
    } else {
      let splitStr = str.split("");
      //console.log(splitStr);
      let reverseArr = splitStr.reverse();
      //console.log(reverseArr)
      let joinArr = reverseArr.join("");
      //console.log(joinArr)
      console.info(joinArr);
    }
  } else {
    if (str === undefined) {
      console.error(`Falta la cadena de texto`);
    } else {
      console.error(`"${str}" No es una cadena de texto`);
    }
  }
};
fn("Hola Mundo");
fn();
fn("");
fn("100");
fn(100);
