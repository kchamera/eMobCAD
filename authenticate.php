<?php
// authenticate.php

session_start();

// Define your access code
define('ACCESS_CODE', 'YourSecureCode123'); // Replace with your actual code

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $entered_code = $_POST['access_code'];

    if ($entered_code === ACCESS_CODE) {
        // Set session variable
        $_SESSION['authenticated'] = true;

        // Redirect to the protected page
        header('Location: index.php');
        exit();
    } else {
        // Redirect back to auth page with error
        header('Location: auth.php?error=1');
        exit();
    }
} else {
    // If accessed without POST data, redirect to auth page
    header('Location: auth.php');
    exit();
}
?>
