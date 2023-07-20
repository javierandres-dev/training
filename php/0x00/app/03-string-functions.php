<?php
  echo "STRING FUNCTIONS<br><br>";
  /*
  single-quoted, double-quoted, concatenate, interpolation,
  escaping (special characters), length, accessing characters,
  */
  // single-quoted
  $surname = 'doe';
  echo $surname . "<br>";
  // double-quoted
  $name = "jane";
  echo $name . "<br><br>";
  // contatenate
  echo $name . ' ' . $surname . "<br><br>";
  // interpolation
  echo '$name $surname<br>';
  echo '{$name} {$surname}<br>';
  echo "$name $surname<br>";
  echo "{$name} {$surname}<br><br>";
  // escaping (special characters)
  echo "Name: '{$name}'<br>";
  echo 'Name: "' . $name . '"<br>';
  echo 'Name: "jane"<br>';
  echo "Name: \"{$name}\"<br><br>";
  echo "Terminator once said: \"I'll be back\"<br>";
  echo 'Terminator once said: "I\'ll be back"<br>';
  echo "Path: http://localhost/03-string-functions.php<br>";
  echo "Path: C:\windows<br><br>";
  // length
  echo strlen($surname) . "<br>";
  // accessing characters
  echo $surname[0] . "<br>";
  echo $surname[1] . "<br>";
  echo $surname[2] . "<br>";
  for($i = 0; $i < strlen($surname); $i++) {
    echo $i . " = " . $surname[$i] . "<br>";
  }
?>
