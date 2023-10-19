<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "okaforchiedozie431@gmail.com";
    $subject = "New Message from Portfolio Website";
    $headers = "From: " . $email;
    $txt = "You have received a new message from " . $name . ".\n\n" . $message;

    mail($to, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}