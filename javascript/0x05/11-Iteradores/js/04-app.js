/**
 * Print "fizz" for multiples of 3
 * Print "buzz" for multiples of 5
 * Print "fizzbuzz" for multiples of both
 */
let i = 0;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
  i++;
}
