<?php

    $errors = array();  // array to hold validation errors
    $data = array();        // array to pass back data

    // validate the variables ========
    if (empty($_POST['email']))
      $errors['email'] = 'Email is required.';

    if (empty($_POST['result']))
      $errors['result'] = 'No result.';

    // return a response ==============

    // response if there are errors
    if ( ! empty($errors)) {

      // if there are items in our errors array, return those errors
      $data['success'] = false;
      $data['errors']  = $errors;
    } else {

      // if there are no errors, return a message
      $data['success'] = true;
      $data['message'] = 'Success!';
    }

    // return all our data to an AJAX call
    echo json_encode($data);

    $email_to = $_POST['email'];
    $email_subject = $_POST['subject'];
    $email_message = htmlentities($_POST['result'], ENT_COMPAT, "UTF-8");     
    $email_from = "info@muziekwerkt.nl";
 
    // create email headers
     
    $headers = 'From: '.$email_from."\r\n".
     
    'Reply-To: '.$email_from."\r\n" .
     
    'X-Mailer: PHP/' . phpversion();

    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-Transfer-Encoding: 8bit\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

     
    @mail($email_to, $email_subject, $email_message, $headers);  

?>