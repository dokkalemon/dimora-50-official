<?php

$to = 'info@dimora50.it';

$name = trim(stripslashes($_POST["name"]));
$lastname = trim(stripslashes($_POST["lastname"]));
$mail = trim(stripslashes($_POST["mail"]));
$phone = trim(stripslashes($_POST["phone"]));
$arrival = trim(stripslashes($_POST["arrival"]));
$departure = trim(stripslashes($_POST["departure"]));
$camera = trim(stripslashes($_POST["camera"]));
$message = trim(stripslashes($_POST["message"]));

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = '<style>
body {font-family: sans-serif;}
p {font-size: 16px}
</style>';



$emailForMe = "<html>
<div>
    <h1>{$name} {$lastname} ti ha scritto!</h1>
    <hr>
</div>

<div>
    <p>{$message}</p>
</div>

<div>
    <ul>
        <li>Nome: {$name}</li>
        <li>Cognome: {$lastname}</li>
        <li>Email: {$mail}</li>
        <li>Phone: {$phone}</li>
        <hr>
    </ul>
</div>
<div>
<h1>Chiede informazioni per:
    <h2><light>{$camera}</light></h2>
    <h2>Periodo: <bold>dal {$arrival} al {$departure}</bold><h2>
</div>
</html>";


$emailForOther = "
    <div>
    <h1>Grazie per avermi Contattato {$name};</h1>
    <p>Ti risponderemo il prima possibile!</p>
    <p>Dimora 50</p>
    </div>

";

mail($to, "Email da www.dimora50.it: {$subject}", $emailForMe, implode("\r\n", $headers));
mail($mail, "Dimora50: Grazie per averci contattato!", $emailForOther, implode("\r\n", $headers));

header("location: https://www.dimora50.it/")

?>