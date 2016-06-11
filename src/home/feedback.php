<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['stay']) 		||
   empty($_POST['customer'])	||
   empty($_POST['overall'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$stay = $_POST['stay'];
$customer = $_POST['customer'];
$overall = $_POST['overall'];

$to = 'glamaride@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Glamaride Feedback Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nStay: $stay Stars\n\nCustomer-Service:\n$customer Stars\n\nOverall:\n$overall Stars";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
echo mail;
return true;			
?>