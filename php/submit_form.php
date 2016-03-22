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
    //$email_message = htmlentities($_POST['result'], ENT_COMPAT, "UTF-8");
    $email_message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
    $email_message .= '<html xmlns="http://www.w3.org/1999/xhtml">';
    $email_message .= '<head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>Muziek Test Advies</title> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> </head>';
    $email_message .= '<body style="margin: 0; padding: 0; font-family: Arial, sans-serif" bgcolor="#fff">';
    $email_message .= '<table border="0" cellpadding="0" cellspacing="0" width="100%">';
    $email_message .= '<tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#414141" width="500"><tr><td align="left" style="padding:20px; font-family: Arial, sans-serif; font-size: 12px; color: #fff ">';
    $email_message .= '<h2 style="color: #3db791;">';
    $email_message .= $_POST['result'];

    $email_message .= '<p style="color:#f38f31; font-weight:bold;">Lees meer over de <a style="color:#f38f31" href="http://www.muziekwerkt.nl" href="" target="_blank">voordelen van muziek</a> op de werkvloer.</p>';
    $email_message .=  '</td></tr></table></td></tr></table></body></html>';

    $email_from = "info@muziekwerkt.nl";
 
    // create email headers
     
    $headers = 'From: '.$email_from."\r\n".
     
    'Reply-To: '.$email_from."\r\n" .
     
    'X-Mailer: PHP/' . phpversion();

    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-Transfer-Encoding: 8bit\n";
    $headers .= "Content-type: text/html; charset=UTF-8\n";
 
    @mail($email_to, $email_subject, $email_message, $headers);  

?>