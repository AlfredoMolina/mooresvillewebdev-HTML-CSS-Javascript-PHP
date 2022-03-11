<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['budget'];
$message = $_POST['message'];

if(!empty($email)&& !empty($message)){
if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $receiver = "mooresvillewebdev@gmail.com";
    $subject = "From: $name <$email>";
    $body = "Name: $name/nEmail: $email/nPhone: $phone/nBudget: $budget/nMessage: $message";
    $sender = "From: $email";
    if(mail($receiver, $subject, $body, $sender)){
        echo "Your message has been sent!";

}else{
echo "Enter valid email!";
}

}else{
echo "Sorry failed to send your message!";
}
}else{
echo "Email and password is required!";
}
?>