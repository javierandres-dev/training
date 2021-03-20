/**
 * Programa una función que dada una fecha válida determine cuantos años han
 * pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35
 * años (en 2020).
 */
const fn = (argv) => {
  if (!(argv instanceof Date)) console.error("Date invalid");
  else {
    let today = new Date().getTime();
    //console.log(today);
    let date = argv.getTime();
    //console.log(date);
    let msToMinutes = 1000 * 60, // Becouse 1000ms = 1 second
      msToHours = 1000 * 60 * 60,
      msToDays = 1000 * 60 * 60 * 24,
      msToWeeks = 1000 * 60 * 60 * 24 * 52,
      msToYears = 1000 * 60 * 60 * 24 * 365,
      msToLustrums = 1000 * 60 * 60 * 24 * 365 * 5,
      msToDecades = 1000 * 60 * 60 * 24 * 365 * 10;
    //console.log(msToYears);
    let humanYears = Math.floor((today - date) / msToYears);
    console.log(humanYears);
  }
};
fn(new Date(1976, 3, 20));
fn(new Date(1984, 4, 23));
fn(new Date(1884, 4, 23));
fn(new Date(2084, 4, 23));
fn(new Date());
fn(1984, 4, 23);
fn("1984, 4, 23");
fn();
