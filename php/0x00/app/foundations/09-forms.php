<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms</title>
  </head>
  <body>
    <form action="09-forms.php" method="post">
      <label for="username">Username</label>
      <input type="text" name="username" id="username">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">
      <button type="submit" name="login">Login</button>
      <?php
        if (isset($_POST["login"])) {
          //echo "<br>Username: {$_GET["username"]}";
          //echo "<br>Password: {$_GET["password"]}";
          echo "<br>Username: {$_POST["username"]}";
          echo "<br>Password: {$_POST["password"]}";
        }
    ?>
    </form>
    <hr>
    <form action="09-forms.php" method="get">
      <label for="minutes">Minutes</label>
      <input type="number" name="minutes" id="minutes">
      <button type="submit" name="calculate">Calculate</button>
      <?php
        if (isset($_GET["calculate"])) {
          $minuteValue = 10;
          $minutes = $_GET["minutes"];
          $minutesValue = $minuteValue * $minutes;
          echo "<br>$minutes minutes x $$minuteValue v\minute = Total: $$minutesValue";
        }
      ?>
    </form>
    <hr>
    <form action="09-forms.php" method="post">
      <label for="visa">Visa</label>
      <input type="radio" name="credit_card" value="visa" id="visa">
      <label for="mastercard">Mastercard</label>
      <input type="radio" name="credit_card" value="mastercard" id="mastercard">
      <label for="americanExpress">American Express</label>
      <input type="radio" name="credit_card" value="american-express" id="americanExpress">
      <button type="submit" name="pay">Pay</button>
      <?php
        if (isset($_POST["pay"])) {
          $credit_card = null;
          if (isset($_POST["credit_card"])) {
            $credit_card = $_POST["credit_card"];
          }
          echo "<br>";
          switch ($credit_card) {
            case 'visa':
              echo("Paid with Visa");
              break;
            case 'mastercard':
              echo("Paid with Mastercard");
              break;
            case 'american-express':
              echo("Paid with America Express");
              break;
            default:
              echo("Please choose an option");
              break;
          }
        }
      ?>
    </form>
    <hr>
  </body>
</html>
<?php
  /*
  echo "<br><br>GLOBAL VARIABLES<br><br>";
  $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE,
  $_SESSION
  */
?>
