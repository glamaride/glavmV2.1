<?php
require_once "Mail.php";
$_POST = json_decode(file_get_contents('php://input'), true);
print_r($_POST);
 
$from =  $_POST['emails'];;
$to = "info@glamaride.in";
$subject = "Test email using PHP SMTP\r\n\r\n";
$body = "This is a test email message";
 
$host = "mail.glamaride.in";
$username = "info@glamaride.in";
$password = "kingking001";
 $port = 25;
 
$headers = array ('From' => $from,
  'To' => $to,
  'Subject' => $subject);
$smtp = Mail::factory('smtp',
  array ('host' => $host,
    'auth' => true,
    'username' => $username,
    'password' => $password));
 
$mail = $smtp->send($to, $headers, $body);
 
 print_r($email);
if (PEAR::isError($mail)) {
  echo("<p>" . $mail->getMessage() . "</p>");
} else {
  echo("<p>Message successfully sent!</p>");
}



// $_POST = json_decode(file_get_contents('php://input'), true);

// if(empty($_POST['names'])      ||
//    empty($_POST['email'])    ||
//    empty($_POST['phone'])    ||
//    empty($_POST['message'])  ||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
//  echo "No arguments Provided!";
//  return false;
//    }
  
// $name = $_POST['names'];
// $email_address = $_POST['email'];
// $phone = $_POST['phone'];
// $message = $_POST['message'];
  
// // Create the email and send the message
// $to = 'info@glamaride.in'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
// $email_subject = "Website Contact Form:  $names";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $names\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $headers .= "Reply-To: $email_address";  
// mail($to,$email_subject,$email_body,$headers);
// return true;     
// 



?>