<?php

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "GET") {

            if(isset($_SESSION["horoscope"])) {

                echo json_encode($_SESSION["horoscope"]);
                 
            } else {
                
                echo json_encode("No date is saved...");
                
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
}



?>
