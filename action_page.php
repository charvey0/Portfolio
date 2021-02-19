<?php 
if (isset($_POST['submit'])) 
{ 
    if ((!isset($_POST['Name'])) || (!isset($_POST['Email'])) ||  
        (!isset($_POST['Message']))) 
    { 
        $error = "*" . "Please fill all the required fields"; 
    } 
    else
    { 
        $name = $_POST['Name']; 
        $email = $_POST['Email']; 
        $message = $_POST['Message']; 

        mail("charvey0@gmail.com", "Message from " + $name + " at " + $email, $message);
    } 
} 
?> 