<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Replace with your real receiving email address
    $receiving_email_address = 'usamanadeemparacha@gmail.com';

    // Form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Validate form data (add more validation if needed)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo 'Please fill in all fields.';
        exit();
    }

    // Create email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";

    // Send email
    $success = mail($receiving_email_address, $subject, $email_message);

    if ($success) {
        http_response_code(200);
        echo 'OK';
    } else {
        http_response_code(500);
        echo 'Error sending email. Please try again later.';
    }
} else {
    // Handle other HTTP methods (GET, PUT, DELETE, etc.) if needed
    header('Allow: POST', true, 405);
    echo 'Method Not Allowed';
}
?>
