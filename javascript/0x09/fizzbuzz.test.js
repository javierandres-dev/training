const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  test('it works', () => {
    expect(true).toBe(true);
  });
  test('should print "Error: Require a number" if it not receive a number', () => {
    const expected = 'Error: Require a number';
    const result = fizzbuzz('1');
    expect(expected).toBe(result);
  });
  test('should print 0 if it receive 0', () => {
    const expected = 0;
    const result = fizzbuzz(0);
    expect(expected).toBe(result);
  });
  test('should print 1 if it receive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });
  test('should print "fizzbuzz" if it receives multiples of 5 and 3', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
  test('should print "fizz" if it receive a multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });
  test('should print "buzz" if it receive a multiple of 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });
});
