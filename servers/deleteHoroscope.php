<?php

try {

    require("./calculateHoroscope.php");
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

         if($_SERVER["REQUEST_METHOD"] === "DELETE") {

            if(!isset($_POST["dayOfBirth"]) && (!isset($_SESSION["horoscope"]))) {

                unset($_SESSION["dayOfBirth"]);
                echo json_encode(false);
                exit;

            } else {
                unset($_SESSION["horoscope"]);
                echo json_encode(true);
                exit;
            }

        } 
    }
    
} catch(Exception $error) {
    echo json_encode(
        array(
            "Message" => $error -> getMessage(),
            "Status" => $error -> getCode()
        )
    );
    exit;
}
