/**
 * Programa una función que reciba un número y evalúe si es capicúa o no
 * (que se lee igual en un sentido que en otro), pe. miFuncion(2002)
 * devolverá true.
 */
const fn = (number) => {
  let a = number.toString();
  a = a.split("");
  a = parseInt(a.reverse().join(""));
  a === number ? console.info(true) : console.info(false);
};
fn(2002);
fn(1234);
fn(1221);
