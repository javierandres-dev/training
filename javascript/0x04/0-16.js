/**
 * Programa una función que devuelva el monto final después de aplicar un
 * descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 */
const fn = (amount, discount) =>
  console.info(amount - amount * (discount / 100));
fn(1000, 20);
fn(1000, 10);
fn(640, 50);
fn(1000, 0);
