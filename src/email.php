<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
  //Gmail 認証情報
  $host = 'mail32.onamae.ne.jp';
  $username = 'info@iris-real-estate.net';
  $password = 'per57557!';

  //差出人
  $from = 'info@iris-real-estate.net';
  $fromname = 'iris info';

  //宛先
  $to = $email;
  $toname = $name;

  //件名・本文
  $subject = '件名';
  $body = $message;

  //メール設定
  $mail->SMTPDebug = 2; //デバッグ用
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->Host = $host;
  $mail->Username = $username;
  $mail->Password = $password;
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $mail->CharSet = "utf-8";
  $mail->Encoding = "base64";
  $mail->setFrom($from, $fromname);
  $mail->addAddress($to, $toname);
  $mail->Subject = $subject;
  $mail->Body    = $body;

  //メール送信
  $mail->send();
  echo '成功';
	header( "HTTP/1.1 200 OK" ) ;

} catch (Exception $e) {
  echo '失敗: ', $mail->ErrorInfo;
  http_response_code(400) ;
  // http_response_code(404) ;
}
?>
