/**
 * Programa una función que determine si un número es primo (aquel que solo es
 * divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
 */
const fn = (n) => {
  let i = 1;
  let count = 0;
  while (i <= n) {
    if (n % i === 0) {
      count++;
    }
    i++;
  }
  count === 2 ? console.info(true) : console.info(false);
};
fn(10);
fn(9);
fn(8);
fn(7);
fn(6);
fn(5);
fn(4);
fn(3);
fn(2);
fn(1);
fn(0);
