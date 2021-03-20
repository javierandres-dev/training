/**
 * Programa una función que dado un arreglo de números obtenga el promedio,
 * pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */
const fn = (a) => {
  let size = a.length;
  let sum = 0;
  const fn1 = (i) => {
    return (sum += i);
  };
  let res = a.map(fn1);
  let lp = res.pop() / size;
  console.log(lp);
};
fn([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
