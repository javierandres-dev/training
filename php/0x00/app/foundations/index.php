<?php
# Single-line comment
// Another single-line comment
/*
    Multiple-lines
    comment
    echo 'Hello, World!';
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
    /*
    echo '<pre>';
    foreach ($persons->fetchAll(PDO::FETCH_ASSOC) as $person) {
        print_r($person);
    }
    echo '</pre>';
    */
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
        <title>Foundations</title>
    </head>
    <body>
        <?php include "../ui/navbar.php"; ?>
        <h1>Foundations</h1>
        <?php echo 'Hello, World! from PHP in HTML file'; ?><br>
        <?php ECHO 'Hello, World! from PHP in HTML file'; ?><br>
        <?php Echo 'Hello, World! from PHP in HTML file'; ?><br>
        <hr>
        <? echo 'Hello, World! from PHP in HTML file'; ?>
        <br>
        <script language="php">
            "Hello, World! from PHP in HTML file"
        </script>
        <button style="border: 2px solid blue;" onclick="handleClick()">
            Click me
        </button>
        <script>function handleClick(){
            alert('Clicked!')
        }</script>
        <hr>
        <nav>
            <a href="./00-variables.php">variables</a>
            <a href="./01-data-types.php">data types</a>
            <a href="./02-string-functions.php">string functions</a>
            <a href="./03-number-functions.php">number functions</a>
            <a href="./04-operators.php">operators</a>
            <a href="./05-math-functions.php">math functions</a>
            <a href="./06-conditionals.php">conditionals</a>
            <a href="./07-loops.php">loops</a>
            <a href="./08-arrays.php">arrays</a>
            <a href="./09-forms.php">forms</a>
        </nav>
    </body>
</html>
