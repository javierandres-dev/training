<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms</title>
  </head>
  <body>
    <a href="/foundations/">Back to foundations</a><hr><br>
    <p>GET vs POST</p>
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
    <p>GET example</p>
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
    <p>radio</p>
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
    <p>checkbox</p>
    <form action="09-forms.php" method="post">
      <label for="c">C</label>
      <input type="checkbox" name="languages[]" id="c" value="c">
      <label for="go">Go</label>
      <input type="checkbox" name="languages[]" id="go" value="go">
      <label for="java">Java</label>
      <input type="checkbox" name="languages[]" id="java" value="java">
      <label for="python">Python</label>
      <input type="checkbox" name="languages[]" id="python" value="python">
      <label for="javascript">JavaScript</label>
      <input type="checkbox" name="languages[]" id="javascript" value="javascript">
      <button type="submit" name="handleLanguages">Languages</button>
      <?php
        if (isset($_POST["handleLanguages"])) {
          $languages = null;
          if (isset($_POST["languages"])) {
            $languages = $_POST["languages"];
          }
          if ($languages) {
            echo "<pre>";
            print_r($languages);
            echo "</pre>";
          } else {
            echo("<br>Please, first select languages");
          }
        }
      ?>
    </form>
    <hr>
    <p>Sanitize inputs</p>
    <form action="09-forms.php" method="post">
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
      <button type="submit" name="greet">Greet</button>
      <?php
        if (isset($_POST["greet"])) {
          if (empty($_POST["name"])) {
            echo "<br>Please, enter a name.";
          } else {
            //$name = $_POST["name"];
            $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
            echo "<br>Hello, $name!";
          }
        }
      ?>
    </form>
    <hr>
    <p>Validate inputs</p>
    <form action="09-forms.php" method="post">
      <label for="theName">Name</label>
      <input type="text" name="the-name" id="theName">
      <label for="theAge">Age</label>
      <input type="text" name="the-age" id="theAge">
      <label for="theEmail">Email</label>
      <input type="text" name="the-email" id="theEmail">
      <button type="submit" name="submit">Submit</button>
      <?php
        if (isset($_POST["submit"])) {
          $name = null;
          if (empty($_POST["the-name"])) {
            echo "<br>Please, enter a name.";
            return;
          }
          $name = filter_input(INPUT_POST, "the-name", FILTER_SANITIZE_SPECIAL_CHARS);
          $age = filter_input(INPUT_POST, "the-age", FILTER_VALIDATE_INT);
          if (empty($age)) {
            echo "<br>Please, enter an age.";
            return;
          }
          $email = filter_input(INPUT_POST, "the-email", FILTER_VALIDATE_EMAIL);
          if (empty($email)) {
            echo "<br>Please, enter an email.";
            return;
          }
          echo "<br>Name: $name<br>Age: $age<br>Email: $email";
        }
      ?>
    </form>
  </body>
</html>
<?php
  /*
  echo "<br><br>GLOBAL VARIABLES<br><br>";
  $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE,
  $_SESSION
  <script>
    alert("You have a VURUS!")
  </script>
  */
?>
