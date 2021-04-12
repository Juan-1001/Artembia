<?php

include'database.php';
$email=$_POST['email'];
$clave=$_POST['clave'];
//Conexion BD y procedimientos

$consulta="SELECT * FROM usuario WHERE email ='$email' and clave ='$clave'";
$resultado=mysqli_query($conexion, $consulta);//Ejecuta la consulta y la conexion

$filas=mysqli_num_rows($resultado);//verifica los datos
if($filas>0){
    header("location:ilustracion.html");
}else{
    echo'<script>alert("A ocurrido un error")</script>';
}

mysqli_free_result($resultado);
mysqli_close($conexion);




