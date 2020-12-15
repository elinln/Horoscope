<?php

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

         if($_SERVER["REQUEST_METHOD"] === "DELETE") {

            unset($_SESSION["dayOfBirth"]);
            echo json_encode(array(
                "Success" => true));

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
    exit;
}

?>