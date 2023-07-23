<a href="/foundations/">Back to foundations</a><hr><br>
<?php
  echo "FUNCTIONS<br><br>";
  /*
  Built-in functions (PHP has more than 1000 built-in functions).
  Own functions.
  Without parameters, with parameters, default value, return value
  Passing argumments by reference
  */
  // without parameters
  function say_hello() {
    echo("Hello!<br>");
  };
  say_hello();
  // with parameters
  function greet($name) {
    echo "Hello, $name!<br>";
  };
  greet("Jane");
  // default value
  function greet_dv($name = "Anonymous") {
    echo "Hello, $name!<br>";
  };
  greet_dv();
  greet_dv("John");
  // return value
  function just_return($value) {return $value;};
  just_return("any");
  echo just_return("any") . "<br>";
  // passing arguments by reference
  function add_ten(&$value) {
    $value += 10;
  };
  $num = 1;
  echo $num . "<br>";
  echo add_ten($num);
  echo $num . "<br>";
?>
