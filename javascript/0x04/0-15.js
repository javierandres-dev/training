/**
 * Programa una función para convertir números de base binaria a decimal y
 * viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 */
const fn = (number, base) => {
  if (base === 2)
    console.info(
      `'${number}' base '${base}' = ${parseInt(number, base)} base 10''`
    );
  if (base === 10)
    console.info(`'${number}' base '${base}' = ${number.toString(2)} base 2''`);
};
fn(100, 2);
fn(1110010, 2);
fn(4, 10);
fn(114, 10);
