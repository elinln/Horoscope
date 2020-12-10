<?php

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

         if($_SERVER["REQUEST_METHOD"] === "DELETE") {

           if(isset($_POST["horoscope"])) {

           } else {

            throw new Exception("No date was found in the requests body...", 500);
           }

        } else {
            throw new Exception("Not a valid request-method...", 405);
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