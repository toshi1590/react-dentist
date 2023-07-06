<?php
class Authentication {
  public static function sign_in (string $email, string $password) {
    if ($email == 'a' && $password == 'a') {
      session_start();
      $_SESSION['email'] = $email;
      // json_encode($email)
      // setcookie('email', 'a', time() + 60 * 60 * 24, '/');
      header( "HTTP/1.1 200 OK" ) ;
    } else {
      header( "HTTP/1.1 403 Forbidden" ) ;
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
      header( "HTTP/1.1 200 OK" ) ;
    } else {
      session_destroy();
      setcookie("PHPSESSID", '', time() - 1800, '/');
      header( "HTTP/1.1 403 Forbidden" ) ;
    }
  }
}
