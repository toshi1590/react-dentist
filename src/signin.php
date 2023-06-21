<?php
header("Access-Control-Allow-Origin: *");
// $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL ); 
$email = filter_input(INPUT_POST, 'email'); 
$password = filter_input(INPUT_POST, 'password');

session_start();
setcookie('hoge', 'fuga', 0); // Set-Cookie:hoge=fuga

($email == 'a' && $password == 'a') ? print('signed in') : print('not signed in');
