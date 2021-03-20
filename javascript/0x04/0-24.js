/**
 * Programa una función que dado un arreglo de números devuelva un objeto con
 * dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y
 * el segundo de forma descendiente,
 * pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
 */
const fn = (a) => {
  let asc = a.sort();
  let desc = asc.reverse();
  let res = {};
  res["asc"] = a.sort();
  res["desc"] = desc;
  console.info(res);
};
fn([7, 5, 7, 8, 6]);
