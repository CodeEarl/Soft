<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate the email address
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "raphewrites@gmail.com"; // Replace with the recipient's email address
        $subject = "New Contact Form Submission";
        $messageBody = "Name: $name\nEmail: $email\nMessage: $message";

        if (mail($to, $subject, $messageBody)) {
            echo "OK"; // Send a success response
        } else {
            echo "Error sending the email"; // Send an error response
        }
    } else {
        echo "Invalid email address"; // Send an error response for invalid email
    }
} else {
    echo "Invalid request";
}
