<?php
$_POST = json_decode(file_get_contents('php://input'), true);

if(empty($_POST['budget'])    ||
   empty($_POST['place'])  	||
   empty($_POST['days'])      ||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
print_r($_POST);
$name = $_POST['email'];
$place = $_POST['place'];
$days = $_POST['days'];
$budget = $_POST['budget'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
	
// Create the email and send the message
$to = 'glamaride@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Customize Your trip Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nPlace:\n$place\n\nDays: $days\n\nbudget:\n$budget";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

if(mail($to,$email_subject,$email_body,$headers)){ 
echo "Mail sent successfully.";
} 
else{ echo "Error.";
}

return true;			
?>