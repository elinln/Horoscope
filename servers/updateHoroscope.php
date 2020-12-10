<?php

try {

    session_start();

    if (isset($_SERVER["REQUEST_METHOD"])) {

        if ($_SERVER["REQUEST_METHOD"] === "POST") {

            if (!isset($_SESSION["dayOfBirth"])) {
                throw new Exception("Inget datum är sparat", 400);
            }
            if (isset($_POST["horoscope"])) {

                $_SESSION["dayOfBirth"] = $_POST["horoscope"];

                echo json_encode(array(
                    "Success" => true
                ));
            } else {

                throw new Exception("No date was found in the requests body...", 500);
            }
        } else {
            throw new Exception("Not a valid request-method...", 405);
        }
    }
} catch (Exception $error) {
    echo json_encode(
        array(
            "Message" => $error->getMessage(),
            "Success" => false
        )
    );
    exit;
}

