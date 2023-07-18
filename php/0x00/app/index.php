<?php
echo 'Hello, World!';
# Single-line comment
// Another single-line comment
/*
    Multiple-lines
    comment
*/
$host = "mysql";
$dbname = "my-wonderful-website";
$charset = "utf8";
$port = "3306";
try {
    $pdo = new PDO(
        dsn: "mysql:host=$host;dbname=$dbname;charset=$charset;port=$port",
        username: "root",
        password: "super-secret-password",
    );
    $persons = $pdo->query("SELECT * FROM Persons");
    echo '<pre>';
    foreach ($persons->fetchAll(PDO::FETCH_ASSOC) as $person) {
        print_r($person);
    }
    echo '</pre>';
} catch (PDOException $e) {
    throw new PDOException(
        message: $e->getMessage(),
        code: (int)$e->getCode()
    );
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body>
    <h1>Home</h1>
    <?php echo 'Hello, World! from PHP in HTML file'; ?><br>
    <?php ECHO 'Hello, World! from PHP in HTML file'; ?><br>
    <?php Echo 'Hello, World! from PHP in HTML file'; ?><br>
    <hr>
    <? echo 'Hello, World! from PHP in HTML file'; ?>
    <br>
    <script language="php">echo "Hello, World! from PHP in HTML file"</script>
    <button style="border: 2px solid blue;" onclick="handleClick()">Click me</button>
    <script>function handleClick(){
        alert('Clicked!')
    }</script>
  </body>
</html>
