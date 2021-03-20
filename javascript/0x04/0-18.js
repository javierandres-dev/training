/**
 * Programa una función que dada una cadena de texto cuente el número de
 * vocales y consonantes,
 * pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */
const fn = (str) => {
  str = str.toLowerCase();
  let vCount = 0;
  let cCount = 0;
  for (let letter of str) {
    if (/[aeiou]/.test(letter)) vCount++;
    //console.log(/[aeiou]/.test(letter));
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letter)) cCount++;
    //console.log(/[bcdfghjklmnñpqrstvwxyz]/.test(letter));
  }
  console.info(`'${str}' contiene ${vCount} vocales y ${cCount} consonantes.`);
};
fn("Hola Mundo");
