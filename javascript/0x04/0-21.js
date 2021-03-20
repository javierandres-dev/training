/**
 * Programa una función que dado un array numérico devuelve otro array con los
 * números elevados al cuadrado,
 * pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */
const fn = (a) => {
  let res = [];
  for (let i of a) {
    let x = i * i;
    res.push(x);
  }
  console.info(res);
};
fn([1, 4, 5]);
