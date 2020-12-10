<?php
include ("addHoroscope.php");
session_start();
if ($_SESSION[""]) {
    echo $_SESSION["horoscope"] = calculateHoroscope($day, $month);
}

?>
