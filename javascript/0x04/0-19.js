/**
 * Programa una función que valide que un texto sea un nombre válido,
 * pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */
const fn = (str) => {
  str = str.toLowerCase();
  //console.log(str)
  //let allow = "abcdefghijklmnñopqrstuvwxyz";
  //console.log(allow);
  for (let letter of str) {
    if (/^[a-z\s]+$/g.test(str)) {
      return console.info(true);
    } else {
      return console.warn(false);
    }
  }
};
fn("Jonathan MirCha");
fn("J0nathan M1rCha");
