<?php
  echo "OPERATORS<br><br>";
  /*
  Arithmetic, Operator precedence, Assignment, Comparison,
  Increment/Decrement, Logical, String, Array, Conditional assignment
  */
  // Arithmetic
  $x = 10;
  $y = 5;
  $z = null;
  $z = $x + $y;
  echo "Addition: {$z}<br>";
  $z = $x - $y;
  echo "Subtraction: {$z}<br>";
  $z = $x * $y;
  echo "Multiplication: {$z}<br>";
  $z = $x / $y;
  echo "Division: {$z}<br>";
  $z = $x % $y;
  echo "Modulus: {$z}<br>";
  $z = $x ** $y;
  echo "Exponentiation: {$z}<br>";
  /* Operator precedence
    ()
    **
    * / %
    + -
  */
  $total = 1 + 2 - 3 * 4 / 5 ** 6;
  echo "Total: {$total}<br>";
  // Assignment
  $z = 0;
  echo "Basic assignment: {$z}<br>";
  $z = $x += $y;
  echo "Adition assignment: {$z}<br>";
  $z = $x -= $y;
  echo "Subtraction assignment: {$z}<br>";
  $z = $x *= $y;
  echo "Multiplication assignment: {$z}<br>";
  $z = $x /= $y;
  echo "Division assignment: {$z}<br>";
  $z = $x %= $y;
  echo "Modulus assignment: {$z}<br>";
  // Comparison
  $z = $x == $y;
  echo "Equal: {$z}<br>";
  $z = $x === $y;
  echo "Identical: {$z}<br>";
  $z = $x != $y;
  echo "Not equal: {$z}<br>";
  $z = $x <> $y;
  echo "Not equal: {$z}<br>";
  $z = $x !== $y;
  echo "Not identical: {$z}<br>";
  $z = $x > $y;
  echo "Greater than: {$z}<br>";
  $z = $x < $y;
  echo "less than: {$z}<br>";
  $z = $x >= $y;
  echo "Greater than or equal to: {$z}<br>";
  $z = $x <=> $y;
  echo "Spaceship: {$z}<br>";
  // Increment/Decrement
  $z = 0;
  ++$z;
  echo "Pre-increment: {$z}<br>";
  $z = 0;
  $z++;
  echo "Post-increment: {$z}<br>";
  $z = 0;
  --$z;
  echo "Pre-decrement: {$z}<br>";
  $z = 0;
  $z--;
  echo "Post-decrement: {$z}<br>";
  // Logical
  $t = true;
  $f = false;
  $z = $t and $f;
  echo "And: {$z}<br>";
  $z = $t or $f;
  echo "Or: {$z}<br>";
  $z = $t xor $f;
  echo "Xor: {$z}<br>";
  $z = $t && $f;
  echo "And: {$z}<br>";
  $z = $t || $f;
  echo "Or: {$z}<br>";
  $z = !$t;
  echo "Not: {$z}<br>";
  // String
  $hello = "Hello";
  $world = "World";
  $z = $hello . $world;
  echo "Concatenation: {$z}<br>";
  $z = $hello .= $world;
  echo "Concatenation assignment: {$z}<br>";
  // Array
  $arr1 = array('one', 'two');
  echo "Array 1: <br>";
  print_r(array_values($arr1));
  $arr2 = array('three', 'four');
  echo "Array 2: <br>";
  print_r(array_values($arr2));
  $z = $arr1 + $arr2;
  echo "Union: <br>";
  print_r(array_values($z));
  echo"<br>";
  // Conditional assignment
  $name = null;
  $who = (empty($name)) ? "Anonymous" : "{$name}";
  echo "Is: {$who}<br>";
  $name = "Pepita";
  $who = (empty($name)) ? "anonymous" : "{$name}";
  echo "Is: {$who}<br>";
?>
