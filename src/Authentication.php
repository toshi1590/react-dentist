<?php
class Authentication {
  public static function sign_in (string $email, string $password) {
    if ($email == 'a' && $password == 'a') {
      session_start();
      $_SESSION['email'] = $email;
      // json_encode($email)
      // setcookie('email', 'a', time() + 60 * 60 * 24, '/');
      print('success');
    } 
  }

  public static function sign_out () {
    session_start();
    session_destroy();
    setcookie("PHPSESSID", '', time() - 1800, '/');
    setcookie("email", '', time() - 1800, '/');
  }

  public static function check () {
    session_start();

    if (isset($_COOKIE['PHPSESSID']) && $_COOKIE['PHPSESSID'] == session_id()) {
      print('success');
    } else {
      session_destroy();
      setcookie("PHPSESSID", '', time() - 1800, '/');
      print('failure'); 
    }
  }
}
