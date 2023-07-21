<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Global variables</title>
</head>
<body>
  <form action="01-global-variables.php" method="post">
    <label for="username">Username</label>
    <input type="text" name="username" id="username">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <button type="submit">Login</button>
  </form>
  <hr>
  <form action="01-global-variables.php" method="get">
    <label for="minutes">Minutes</label>
    <input type="number" name="minutes" id="minutes">
    <button type="submit">Calculate</button>
  </form>
  <hr>
</body>
</html>
  <?php
    echo "<br><br>GLOBAL VARIABLES<br><br>";
    /*
    $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE,
    $_SESSION
    */
    echo "Username: {$_GET["username"]}<br>";
    echo "Password: {$_GET["password"]}";
    echo "Username: {$_POST["username"]}<br>";
    echo "Password: {$_POST["password"]}";
    $minuteValue = 10;
    $minutes = $_GET["minutes"];
    $minutesValue = $minuteValue * $minutes;
    echo "Total: USD{$minutesValue}"
  ?>
