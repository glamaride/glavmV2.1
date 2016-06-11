<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if(empty($_POST['group'])  		||
   empty($_POST['budget']) 		||
   empty($_POST['email']) 		||
   empty($_POST['phone'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['email'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$group = $_POST['group'];
$budget = $_POST['budget'];
// Create the email and send the message
$to = 'amitbmsce12@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Glamaride Enquiry Form:  $names";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $names\n\nEmail: $email_address\n\nPhone: $phone\n\nBudget:\n$budget\n\nGroup:\n$group";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>