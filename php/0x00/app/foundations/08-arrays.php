<a href="/foundations/">Back to foundations</a><hr><br>
<?php
  echo "ARRAYS<br><br>";
  /*
  Types: Indexed, Associative, Multidimensional
  Built-in functions: count, unset,
  */
  $arr = array();
  echo var_dump($arr) . "<br>";
  $arr = [];
  echo var_dump($arr) . "<br>";
  $arr = [1, 2, 3];
  echo var_dump($arr) . "<br>";
  $arr[] = 4;
  echo var_dump($arr) . "<br>";
  $arr[4] = 5;
  echo var_dump($arr) . "<br>";
  $arr[2] = 30;
  echo var_dump($arr) . "<br>";
  //echo($arr);
  print_r($arr);
  echo "<br><pre>";
  print_r($arr);
  echo "</pre><br>";
  // indexed
  $indexedArr[0] = "hello";
  echo $indexedArr[0] . "<br>";
  $indexedArr = array("one", "two", "three", "four");
  echo $indexedArr[0] . "<br><br>";
  for ($i=0; $i < count($indexedArr); $i++) {
    echo $indexedArr[$i] . "<br>";
  }
  echo "<pre>";
  print_r($indexedArr);
  echo "</pre><br>";
  // associative
  $associativeArr["Jane"] = "purple";
  echo $associativeArr["Jane"] . "<br>";
  $associativeArr = array("Jane" => "purple", "John" => "blue");
  foreach ($associativeArr as $key => $value) {
    echo $key . " " . $value . "<br>";
  }
  echo "<pre>";
  print_r($associativeArr);
  echo "</pre><br>";
  // multidimensional
  $multidimensionalArr = array(
    array("Jane", "purple", "pizza"),
    array("John", "blue", "pasta")
  );
  echo $multidimensionalArr[0][0] . "<br>";
  echo $multidimensionalArr[0][1] . "<br>";
  echo $multidimensionalArr[0][2] . "<br>";
  echo $multidimensionalArr[1][0] . "<br>";
  echo $multidimensionalArr[1][1] . "<br>";
  echo $multidimensionalArr[1][2] . "<br>";
  echo "<br>";
  for ($i=0; $i < count($multidimensionalArr); $i++) {
    for ($j=0; $j < count($multidimensionalArr[$i]); $j++) {
      echo $multidimensionalArr[$i][$j] . "<br>";
    }
  }
echo "<pre>";
  print_r($multidimensionalArr);
  echo "</pre><br>";
  // Built-in array functions
  echo "<pre>";
  print_r($arr);
  echo "</pre><br>";
  // count
  echo count($arr) . "<br>";
  // unset
  unset($arr[2]);
  echo "<pre>";
  print_r($arr);
  echo "</pre><br>";
?>
