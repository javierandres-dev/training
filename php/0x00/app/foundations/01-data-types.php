<?php
  echo "DATA TYPES<br><br>";
  /*
  Basics: string, integer, float, boolean, null
  Type juggling
  Type casting
  */
  $name = "Jane";
  echo "Name: {$name}<br>";
  $num1 = 10;
  $num2 = 5;
  echo "First number: {$num1}<br>";
  echo "Second number: {$num2}<br>";
  $average = 4.8;
  echo "Average: {$average}<br>";
  $price = 9.99;
  echo "Price: \${$average}<br>";
  $logged = true;
  echo "Logged: {$logged}<br>";
  $allow = false;
  echo "Allow: {$allow}<br>";
  $empty = null;
  echo "Empty: {$empty}<br>";
  echo "<br>";
  // Type juggling
  $my_var = "hello";
  echo $my_var . "<br>";
  $my_var = 1000;
  echo $my_var . "<br>";
  $my_num_var = 40;
  $my_str_var = "40 computers";
  if ($my_num_var == $my_str_var) {
    echo "Are equals<br>";
  } else {
    echo "Are not equals<br>";
  }
  if ($my_num_var === $my_str_var) {
    echo "Are identicals<br>";
  } else {
    echo "Are not identicals<br>";
  }
  $my_num_var = 40;
  $my_str_var = 40;
  if ($my_num_var === $my_str_var) {
    echo "Are identicals<br>";
  } else {
    echo "Are not identicals<br>";
  }
  $result = $my_num_var + $my_str_var;
  echo "Adsition: {$result}<br>";
  $result = $my_num_var - $my_str_var;
  echo "Subtraction: {$result}<br>";
  $result = $my_num_var * $my_str_var;
  echo "Multiplication: {$result}<br>";
  $result = $my_num_var / $my_str_var;
  echo "Division: {$result}<br>";
  echo "<br>";
  // Type casting
  echo (int)10.1 . "<br>";
  echo (int)10.5 . "<br>";
  echo (int)10.9 . "<br>";
  echo (int)"hello" . "<br>";
  echo (int)"1000 hello" . "<br>";
  echo (int)null . "<br>";
  echo intval("20 hello") . "<br>";
  echo (float)"10.5" . "<br>";
  echo (string)10.5 . "<br>";
  echo (string)true . "<br>";
  echo (string)false . "<br>";
  echo (string)[1, 2, 3, 4] . "<br>";
?>
