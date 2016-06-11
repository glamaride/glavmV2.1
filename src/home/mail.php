<?php
 /**
  * Simple example script using PHPMailer with exceptions enabled
  * @package phpmailer
  * @version $Id$
  */
 
 require 'class.phpmailer.php';
 
 print_r($_POST);
print_r($_FILES);
 try {
    $mail = new PHPMailer(true); //New instance, with exceptions enabled
    
    $to = 'abhijeet24patil@gmail.com';
    $mail->AddAddress($to);
    $mail->From     = $_POST['email'];
    $mail->FromName = $_POST['name'];
    $mail->LastName = $_POST['lname'];
    $mail->Experience = $_POST['exp'];
    $mail->Subject  = "Test Email using PHP";

    echo $email;
    
    $body = "<table>
	                         <tr>
							    <th colspan='2'>This Sample Mail</th>
							 </tr>

							 <tr>
							    <td style='font-weight:bold'>Name :</td>
								<td>" . $_POST['name'] . "</td>
							 </tr>

							 <tr>
							  <td style='font-weight:bold'>E-mail : </td>
							  <td>" . $_POST['email'] . "</td>
							</tr>

							<tr>
							  <td style='font-weight:bold'>Phone : </td>
							  <td>" . $_POST['phone'] . "</td>
							</tr>

                            <tr>
                              <td style='font-weight:bold'>Experience : </td>
                              <td>" . $_POST['exp'] . "</td>
                            </tr>

							<tr>
							  <td style='font-weight:bold'>Message : </td>
							  <td>" . $_POST['message'] . "</td>
							</tr>
	                     <table>";
    $body = preg_replace('/\\\\/', '', $body); //Strip backslashes
    $mail->MsgHTML($body);
    
    $mail->IsSMTP(); // tell the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->Port     = 25; // set the SMTP server port
    $mail->Host       = "ftp.growthsquare.esy.es"; // SMTP server
    $mail->Username   = "u741578348";     // SMTP server username
    $mail->Password   = "abhijeet24";            // SMTP server password
    
    $mail->IsSendmail(); // tell the class to use Sendmail
    $mail->AddReplyTo("admin@smarttutorials.net");
    $mail->AltBody  = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
    $mail->WordWrap = 80; // set word wrap
    
    //$mail->AddAttachment($_FILES['image']['tmp_name'], $_FILES['image']['name']);
    $mail->IsHTML(true); // send as HTML
    $mail->Send();
    echo 'Message has been sent.';
 }
 catch (phpmailerException $e) {
    echo $e->errorMessage();
 }
?>
