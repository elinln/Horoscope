<?php

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "GET") {

            echo json_encode("TEST with GET");

            if(isset($_SESSION["horoscope"])) {

                echo json_encode(unserialize($_SESSION["horoscope"]));
                
            } else {
                
                echo json_encode(unserialize("No date is saved..."));
                
            }

        } else if($_SERVER["REQUEST_METHOD"] === "POST") {

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

/* if (isset($_SESSION[""]) ) {
    echo $_SESSION["horoscope"] = calculateHoroscope($day, $month);

}

 */

?>
