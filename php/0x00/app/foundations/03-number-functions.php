<?php
  echo "NUMBER FUNCTIONS<br><br>";
  /*
  Predefined constants, integer, float, infinity, NaN, numerical string
  */
  // Predefined constants
  echo PHP_INT_MIN;
  echo "<br>";
  echo PHP_INT_MAX;
  echo "<br>";
  echo PHP_INT_SIZE;
  echo PHP_FLOAT_MIN;
  echo "<br>";
  echo PHP_FLOAT_MAX;
  echo "<br>";
  echo PHP_FLOAT_DIG;
  echo "<br>";
  echo PHP_FLOAT_EPSILON;
  echo "<br><br>";
  // integer
  $my_integer = 10;
  echo $my_integer;
  echo "<br>";
  echo is_int($my_integer);
  echo "<br>";
  echo is_integer($my_integer);
  echo "<br>";
  echo is_long($my_integer);
  echo "<br><br>";
  // float
  $my_float = 10.5;
  echo $my_float;
  echo "<br>";
  echo is_float($my_float);
  echo "<br>";
  echo is_double($my_float);
  echo "<br><br>";
  // infinity
  echo "is_finite:" . is_finite($my_integer);
  echo "<br>";
  echo "is_infinite:" . is_infinite($my_integer);
  echo "<br>";
  echo "is_finite:" . is_finite(1.9e411);
  echo "<br>";
  echo "is_infinite:" . is_infinite(1.9e411);
  echo "<br><br>";
  // NaN
  if (!is_nan(10)) {
    echo "Is a number";
  }
  echo "<br><br>";
  // numerical string
  echo is_numeric(10) . "<br>";
  echo is_numeric("10") . "<br>";
  echo is_numeric(10.5) . "<br>";
  echo is_numeric("10.5") . "<br>";
  echo is_numeric("hello") . "<br>";
?>
