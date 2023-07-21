<?php
  echo "VARIABLES<br><br>";
  /*
  VARIABLES SCOPE: local, global, static
  Basic functions: var_dump, gettype, isset, empty, is_null
  */
  $name = "Jane";
  $_surname = "Doe";
  // Variable interpolation
  echo "Hello, {$name} {$_surname}!<br>";
  echo "var_dum: ";
  echo var_dump($name);
  echo "<br>";
  echo "gettype: ";
  echo gettype(($name));
  echo "<br>";
  $returned = isset($name);
  echo var_dump($returned) . "isset: {$returned}<br>";
  $returned = empty($name);
  echo var_dump($returned) . "empty: {$returned}<br>";
  $returned = is_null($name);
  echo var_dump($returned) . "is_null: {$returned}<br>";
?>
