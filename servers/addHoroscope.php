<?php

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

         if($_SERVER["REQUEST_METHOD"] === "POST") {

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


/*try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "GET") {

                echo json_encode("TEST ANSWER");

        } else if($_SERVER["REQUEST_METHOD"] === "POST") {


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


// ______________________________________________

 if ($_SESSION["horoscope"]) {
    return true;
}

$inputDate = $_POST["dayOfBirth"];
$date = date_parse($inputDate);
if ($date) {
    $day = $date["day"];
    $month = $date["month"];
    $_SESSION["horoscope"] = calculateHoroscope($day, $month);
}

function calculateHoroscope($day, $month)
{
    switch ($month) {
        case 1:
            if ($day < 21) {
                return "Stenbock";
            }
            return "Vattuman";
        case 2:
            if ($day < 19) {
                return "Vattuman";
            }
            return "Fisk";
        case 3:
            if ($day < 20) {
                return "Fisk";
            }
            return "Vädur";
        case 4:
            if ($day < 22) {
                return "Väder";
            }
            return "Oxe";
        case 5:
            if ($day < 22) {
                return "Oxe";
            }
            return "Tvilling";
        case 6:
            if ($day < 23) {
                return "Tvilling";
            }
            return "Kräfta";
        case 7:
            if ($day < 23) {
                return "Kräfta";
            }
            return "Lejon";
        case 8:
            if ($day < 24) {
                return "Lejon";
            }
            return "Jungfru";
        case 9:
            if ($day < 25) {
                return "Jungfru";
            }
            return "Våg";
        case 10:
            if ($day < 24) {
                return "Våg";
            }
            return "Skorpion";
        case 11:
            if ($day < 25) {
                return "Skorpion";
            }
            return "Skytt";
        case 12:
            if ($day < 24) {
                return "Stenbock";
            }
            return "Vattuman";
    };
};
 */