<?php
include'database.php';
//recibe los datos creados y los almacena en la BD
$doc_usuario = $_POST["doc_usuario"];
$nombres = $_POST["nombres"];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$num_contac = $_POST["num_contac"];
$tip_contenido = $_POST["tip_contenido"];
$clave = $_POST["clave"]; 

//insertar datos en las variables (consulta)
$insertar = "INSERT INTO usuario(doc_usuario, nombres, apellidos, email, num_contac, tip_contenido, clave) VALUES ('$doc_usuario', '$nombres', '$apellidos', '$email', '$num_contac', '$tip_contenido', '$clave')";

//Script para que no se repitan los usuarios creados
$verificar_email = mysqli_query($conexion, "SELECT * FROM usuario WHERE email = '$email'");
if(mysqli_num_rows($verificar_email) > 0){
    echo '<script>alert("Este email ya esta registrado")
    window.history.go(-1)</script>';
    exit;
}

$verificar_num_contact = mysqli_query($conexion, "SELECT * FROM usuario WHERE num_contac = '$num_contac'");
if(mysqli_num_rows($verificar_num_contact) > 0){
    echo '<script>alert("Este numero ya esta registrado")
    window.history.go(-1)</script>';
    exit;
}

$verificar_doc_usuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE doc_usuario = '$doc_usuario'");
if(mysqli_num_rows($verificar_doc_usuario) > 0){
    echo '<script>alert("Este documento ya esta registrado")
    window.history.go(-1)</script>';
    exit;
}

//Confirmacion de registro de datos
$resultado = mysqli_query($conexion, $insertar);
if(!$resultado){
    echo 'Error al registrarse';
} else {
    echo '<script>alert("Usuario registrado exitosamente, campeon")
    window.history.go(-1)</script>';
}
mysqli_close($conexion);
?>