<?php

try {
    
    session_start();
    
    if(isset($_SERVER["REQUEST_METHOD"])) {

        if($_SERVER["REQUEST_METHOD"] === "GET") {

            if(isset($_SESSION["dayOfBirth"])) {

                
                $inputDate = $_SESSION["dayOfBirth"];
                $date = date_parse($inputDate);

             if ($date) {
                $day = $date["day"];
                $month = $date["month"];
                echo json_encode(array(
                    "Success" => true,
                    "Horoscope" => calculateHoroscope($day, $month),
                    "DateOfBirth" => $inputDate,
                ));
                }
                 
            } else {
                
                echo json_encode(
                    array(
                        "Success" => false, 
                        "Message" => "No session is found..."
                    )
                    );                
            }

        } 
    }
    
} catch(Exception $error) {
    echo json_encode(
        array(
            "Message" => $error -> getMessage(),
            "Success" => false 
            )
    );
    exit;
}



function calculateHoroscope($day, $month) {
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
                return "Vädur";
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
