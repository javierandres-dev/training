/**
 * Programa una función que determine si un número es par o impar, pe. miFuncion
 * (29) devolverá Impar.
 */
const fn = (n) =>
  n % 2 === 0
    ? console.info(`${n} es un número par`)
    : console.info(`${n} es un número impar.`);
fn(29);
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
