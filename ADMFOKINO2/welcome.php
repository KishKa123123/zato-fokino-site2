<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}
?>

<h2>Добро пожаловать, <?php echo $_SESSION['username']; ?>!</h2>
<a href="logout.php">Выйти</a>
