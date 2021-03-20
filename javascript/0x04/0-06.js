/**
 * Programa una función para contar el número de veces que se repite una palabra
 * en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá
 * 2.
 */
const fn = (str, word) => {
  if (typeof str === "string" && typeof word === "string") {
    if (str.length === 0 || word.length === 0) {
      console.warn("Cadena o palabra vacia.");
    } else {
      //console.log(str);
      let check = str.includes(word);
      if (check === false) {
        console.info(`La palabra "${word}" no está en "${str}".`);
      } else {
        let regex = new RegExp(word, "g");
        //console.log(regex)
        let times = str.match(regex);
        //console.log(times)
        times = times.length;
        console.info(
          `La palabra "${word}" se encuentra ${times} veces en "${str}".`
        );
      }
    }
  } else {
    if (str === undefined || word === undefined) {
      console.error("Falta cadena de texto o palabra.");
    } else {
      console.error(`Los parametros que recibe la función son texto.`);
    }
  }
};
fn("hola mundo adios mundo", "mundo");
fn("hello world bye world", "mundo");
fn("hola mundo adios mundo", "");
fn("", "mundo");
fn(100, "mundo");
fn("hola mundo adios mundo", 100);
fn("hola mundo adios mundo");
fn(100);
