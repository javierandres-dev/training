<?php
  echo "CONDITIONALS<br><br>";
  // if, if...else, if...elseif...else, switch
  // if
  $num = 0;
  if($num == 0) {
    echo "The number is zero<br>";
  }
  // if...else
  $active = false;
  if($active) {
    echo "Is active<br>";
  } else {
    echo "Is not active<br>";
  }
  // if...elseif...else
  $num = 10;
  if($num > 0) {
    echo "The number is positive<br>";
  }
  elseif($num < 0) {
    echo "The number is negative<br>";
  } else {
    echo "The number is zero<br>";
  }
  // switch
  $score = null;
  switch ($score) {
    case 0:
      echo "Score: Fail<br>";
      break;
    case 1:
      echo "Score: Insufficient<br>";
      break;
    case 2:
      echo "Score: Poor<br>";
      break;
    case 3:
      echo "Score: Basic<br>";
      break;
    case 4:
      echo "Score: High<br>";
      break;
    case 5:
      echo "Score: Superior<br>";
      break;
    default:
      echo "Score: Invalid score.<br>";
      break;
  }
?>
