<?php
session_start();
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Администрация ЗАТО Фокино</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script2js.js" defer></script>
</head>
<body>
<header>
        <a href="index.php" class="logo">
            <img src="flag_fokina.jpg" alt="Логотип ЗАТО Фокино">
        </a>
        <h1>Администрация городского округа ЗАТО Фокино</h1>
        <nav>
            <ul>
                <li><a href="index.php">Главная</a></li>
                <li class="dropdown">
                    <a href="about.php">О муниципальном образовании</a>
                    <ul class="dropdown-menu">
                        <li><a href="History.php">История</a></li>
                        <li><a href="symbol.php">Символика</a></li>
                        <li><a href="citizens.php">Почётные граждане</a></li>
                        <li><a href="places.php">Достопримечательности</a></li>
                    </ul>
                </li>
                <li><a href="news.php">Новости</a></li>
                <li><a href="contacts.php">Контакты</a></li>
                <li><a href="jobs.php">Каталог Вакансий</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2 class="page-title">Новости и репортажи</h2>
        <div class="news-item">
            <img src="no_foto.jpg" alt="Как по-новому применять ККТ">
            <div class="news-content">
                <p class="news-date">17 декабря, 03:26</p>
                <h2 class="news-title">Пример заголовка</h2>
                <p class="news-description">
                    Пример новостной строки про новости, о новостях, с новостями, новости.
                </p>
            </div>
        </div>
        
        <div class="news-item">
            <img src="no_foto.jpg" alt="Завершение Второй мировой войны">
            <div class="news-content">
                <p class="news-date">03 сентября, 08:24</p>
                <h2 class="news-title">XXX</h2>
                <p class="news-description">
                    Пример модульного блока с новостями. Тут размещается подробная информация 
                </p>
            </div>
        </div>
        <!-- Модальное окно -->
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2 id="modal-title"></h2>
        <p id="modal-date" class="modal-date"></p>
        <img id="modal-image" src="" alt="" class="modal-image">
        <p id="modal-description"></p>
    </div>
</div>

</main>  

<footer class="footer">
    <div class="container">
        <p>© 2025 Администрация городского округа ЗАТО Фокино</p>
        <p>Контакты: priemnaya@mail.fokino-prim.ru | Тел: 8 (42339) 24-7-17</p>
    </div>
</footer>
</body>