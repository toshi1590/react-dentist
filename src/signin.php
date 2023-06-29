<?php
include_once './Authentication.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

// $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL ); 
$email = filter_input(INPUT_POST, 'email'); 
$password = filter_input(INPUT_POST, 'password');
Authentication::sign_in($email, $password);
