function fizzbuzz(aNumber) {
  if (typeof aNumber !== 'number') return 'Error: Require a number';
  if (aNumber === 0) return aNumber;
  const remainderZero = (divisor, dividend) => divisor % dividend === 0;
  if (remainderZero(aNumber, 5) && remainderZero(aNumber, 3)) return 'fizzbuzz';
  if (remainderZero(aNumber, 3)) return 'fizz';
  if (remainderZero(aNumber, 5)) return 'buzz';
  return aNumber;
}

function print(aNumber) {
  for (let i = 0; i <= aNumber; i++) {
    console.log(fizzbuzz(i));
  }
}

print(16);

module.exports = fizzbuzz;
