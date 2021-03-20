/**
 * Programa una función que dado un arreglo de elementos, elimine los
 * duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá
 * ["x", 10, 2, "10", true].
 */
const fn = (a) => {
  let res = new Set(a);
  console.info(res);
};
fn(["x", 10, "x", 2, "10", 10, true, true]);
