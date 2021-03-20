/**
 * Programa una función que elimine cierto patrón de caracteres de un texto
 * dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
 * devolverá  "1,2, 3, 4 y 5.
 */
const fn = (str, pattern) => {
  if (typeof str === "string" && typeof pattern === "string") {
    if (str.length === 0 || pattern.length === 0) {
      console.warn("Ningún parámetro puede estar vacio.");
    } else {
      let regex = new RegExp(pattern, "g");
      //console.log(regex)
      let strToArr = str.split(",");
      //console.log(strToArr)
      let arr = [];
      strToArr.forEach((i) => {
        let check = i.includes(pattern);
        //console.log(check)
        if (check === true) {
          let j = i.replace(regex, "");
          //console.log(j)
          arr.push(j);
        }
      });
      if (arr.length === 0) {
        console.info(`el patrón "${pattern}" no se encuentra en "${str}"`);
      } else {
        console.info(arr.join());
      }
    }
  } else {
    if (str === undefined || pattern === undefined) {
      console.warn("Faltan parámetros.");
    } else {
      console.error(
        "Solo se acepta cadenas de texto como parámetros de esta función."
      );
    }
  }
};
fn("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
fn("xyz1, xyz2, xyz3, xyz4 y xyz5", "");
fn("", "xyz");
fn("xyz1, xyz2, xyz3, xyz4 y xyz5");
fn("100", "xyz");
fn("xyz1, xyz2, xyz3, xyz4 y xyz5", "100");
fn("xyz1, xyz2, xyz3, xyz4 y xyz5", 100);
fn(100, "xyz");
fn(100, 100);
fn(100);
fn();
