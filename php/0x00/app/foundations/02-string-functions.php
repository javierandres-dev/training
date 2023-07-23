<a href="/foundations/">Back to foundations</a><hr><br>
<?php
  echo "STRING FUNCTIONS<br><br>";
  /*
  single-quoted, double-quoted, concatenate, interpolation,
  escaping (special characters), length, accessing characters, heredoc, newdoc,
  count words, reverse, search, replace, lower, upper, trim, shuffle, compare,
  pad, find position, substring, explode, implode, etc.
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
  echo "<pre>";
  echo "First line\nSecond line";
  echo "</pre>";
  echo "<br>";
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
  echo "<br>";
  // heredoc
  $heredocExample = <<<Demo
  It is the content heredoc example<br>
  Demo;
  echo $heredocExample;
  // newdoc
  $newdocExample = <<<'Demo'
  It is the content newdoc example<br>
  Demo;
  echo $newdocExample;
  echo "<br><br>";
  // count words
  echo str_word_count("Hello, World!");
  echo "<br>";
  // reverse
  echo strrev("Hello, World!");
  echo "<br>";
  // search
  echo strpos("I'm learning PHP", "learning");
  echo "<br>";
  // replace
  echo str_replace("learning", "practicing", "I'm learning PHP");
  echo "<br><br>";
  $fullname = "Jane Doe";
  // lower
  echo strtolower($fullname) . "<br>";
  // upper
  echo strtoupper($fullname) . "<br>";
  // trim
  echo trim($fullname) . "<br>";
  // shuffle
  echo str_shuffle($fullname) . "<br>";
  // compare
  echo strcmp($fullname, "Jane Doe") . "<br>";
  echo strcmp($fullname, "John Doe") . "<br>";
  // pad
  echo str_pad($fullname, 10, "z") . "<br>";
  // find position
  echo strpos($fullname, " ") . "<br>";
  // substring
  echo substr($fullname, 0, 4) . "<br>";
  echo substr($fullname, 5) . "<br>";
  // explode
  $arr = explode(" ", $fullname);
  echo "<pre>";
  print_r($arr);
  echo "</pre>";
  // implode
  $fullnameArr = array("Anna", "Taylor");
  echo "<pre>";
  print_r($fullnameArr);
  echo "</pre>";
  $fullname = implode(" ", $fullnameArr);
  echo $fullname . "<br>";
?>
