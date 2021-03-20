/**
 * Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 * pe. miFuncion(0,"C") devolverá 32°F.
 */
const fn = (n, s) => {
  if (s === "C") {
    let f = n * 1.8 + 32;
    console.info(`${n}°C equivalen a ${f}°F`);
  }
  if (s === "F") {
    let c = (n - 32) / 1.8;
    console.info(`${n}°F equivalen a ${c}°C`);
  }
};
fn(0, "C");
fn(0, "F");
fn(8, "C");
fn(9, "F");
