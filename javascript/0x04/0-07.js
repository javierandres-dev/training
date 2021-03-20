/**
 * Programa una función que valide si una palabra o frase dada, es un palíndromo
 * (que se lee igual en un sentido que en otro), pe. mifuncion("Salas")
 * devolverá true.
 */
const fn = (str) => {
  if (typeof str === "string") {
    let splitStr = str.split("");
    //console.log(splitStr);
    let reverseArr = splitStr.reverse();
    //console.log(reverseArr)
    let joinArr = reverseArr.join("");
    //console.log(joinArr)
    if (str.toLowerCase() === joinArr.toLowerCase()) {
      console.info(true);
    } else {
      console.info(false);
    }
  } else {
    if (str === undefined) {
      console.error(`Falta cadena de texto.`);
    } else {
      console.error(`"${str}" No es una cadena de texto.`);
    }
  }
};
fn("Salas");
fn(100);
fn("Step on no pets");
fn();
fn("alas");
fn("1001");
fn("100");
