<a href="/foundations/">Back to foundations</a><hr><br>
<?php
  echo "LOOPS<br><br>";
  // while, do...while, for, foreach, break, continue
  // while
  $i = 0;
  while ($i <= 4) {
    echo $i . "<br>";
    $i++;
  }
  echo "<br>";
  // do...while
  $i = 0;
  do {
    echo $i . "<br>";
    $i++;
  } while ($i <= 4);
  echo "<br>";
  // for
  for ($i=0; $i <= 4 ; $i++) {
    echo $i . "<br>";
  }
  echo "<br>";
  // foreach
  $arr = array("one", "two", "three", "four");
  foreach ($arr as $el) {
    echo $el . "<br>";
  }
  echo "<br><br>";
  // break
  $i = 0;
  while ($i <= 5) {
    if ($i === 3) {
      break;
    }
    echo $i . "<br>";
    $i++;
  }
  echo "<br>";
  // continue
  $i = 0;
  while ($i <= 5) {
    if ($i === 3) {
      $i++;
      continue;
    }
    echo $i . "<br>";
    $i++;
  }
?>
