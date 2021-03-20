/**
 * Programa una función que dado un array devuelva el número mas alto y el más
 * bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */
const fn = (a) => {
  let res = [];
  res.push(Math.max(...a));
  res.push(Math.min(...a));
  console.info(res);
};
fn([1, 4, 5, 99, -60]);
