<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){ // verific daca formularul a fost trimis prin POST

    // DATE PERSONALE
    $numefamilie = $_POST["numefamilie"];
    $prenume = $_POST["prenume"];
    $numeanimal = $_POST["numeanimal"];
    $telefon = $_POST["telefon"];
    $email = $_POST["email"]; 

    // DESPRE ANIMALUT
    $animal = $_POST["animal"]; // daca e catel sau pisica
    $varsta = $_POST["varsta"];

    // COMPORTAMENT
    if(!empty($_POST["comportament"])){
        // daca au fost selectate atribute comportamentale ale animalutului
        $comportamente = implode(", ", $_POST["comportament"]);
    } else{
        $comportamente = "Atribute comportamentale nementionate";
    }
    $descriere = $_POST["descriere"];

    // SEJUR
    $datasosire = $_POST["datasosire"];
    $dataplecare = $_POST["dataplecare"];
    $camera = $_POST["camera"];

    // SCRIPT MESAJ
    $message = "
    
    🐾 REZERVARE HOTEL VACATION PAWRTAL 🐾

    Va multumim pentru increderea acordata!
    
    Mai jos regasiti raspunsurile formularului dumneavoastra de rezervare.

    Date personale stapan: 
    Nume si prenume: $numefamilie $prenume
    Telefon: $telefon
    Email: $email

    Date personale animalut:
    Nume: $numeanimal
    Specia: $animal
    Varsta: $varsta ani

    Comportament:
    Comportamente observate: $comportamente
    Descriere detaliata: $descriere

    Sejur:
    Data sosirii: $datasosire
    Data plecarii: $dataplecare
    Tip de camera solicitata: $camera

    Ne vedem in vacanta! 🐾

    ";

    $to = "adapreda2005@gmail.com";
    $subject = "CERERE REZERVARE VACATION PAWRTAL";
    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)){
        // daca mail ul este trimis cu succes
        echo "Email trimis cu succes";
    }
    else{
        echo "Emailul nu a putut fi trimis";
    }


}
?>