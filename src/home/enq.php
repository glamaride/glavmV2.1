<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['ptime'])	||
	
$name = $_POST['name'];
$phone = $_POST['phone'];
$group = $_POST['ptime'];

// Create the email and send the message
$to = 'amitbmsce12@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Glamaride Enquiry Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\nPrefferedTime:\n$ptime";
$headers = "From: noreply@glamaride.in\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: @name";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>