<?php
  echo "Foundations<br><br>";
  /*
  DATA TYPES
    Basics: string, integer, float, boolean, null
  VARIABLES SCOPE: local, global, static
  */
  // VARIABLES
  $_surname = "Pérez";
  echo $_surname;
  echo "<br>";
  $name = "Pepita";
  echo $name;
  echo "<br>";
  echo "Hello, {$name}!";
  echo "<br>";
  $num1 = 10;
  $num2 = 5;
  echo "First number: {$num1}";
  echo "<br>";
  echo "Second number: {$num2}";
  $average = 4.8;
  echo "<br>";
  echo "Average: {$average}";
  $price = 9.99;
  echo "<br>";
  echo "Price: \${$average}";
  $logged = true;
  echo "<br>";
  echo "Logged: {$logged}";
  $allow = false;
  echo "<br>";
  echo "Allow: {$allow}";
  $empty = null;
  echo "<br>";
  echo "Empty: {$empty}";
?>
