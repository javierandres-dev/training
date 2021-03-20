/**
 * Programa una función que calcule el factorial de un número
 * (El factorial de un entero positivo n, se define como el producto de todos
 * los números enteros positivos desde 1 hasta n), pe. miFuncion(5)
 * devolverá 120.
 */
const fn = (number) => {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  console.info(factorial);
};
fn(5);
fn(4);
