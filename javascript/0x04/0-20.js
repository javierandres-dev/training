/**
 * Programa una función que valide que un texto sea un email válido,
 * pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
 */
const fn = (str) => {
  str = str.toLowerCase();
  //console.log(str);
  let allow = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    str
  );
  return allow ? console.info("Valid") : console.warn("Invalid");
};
fn("name@gmail.com");
fn("name");
fn("name@g.co");
