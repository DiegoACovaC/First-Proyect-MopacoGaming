<?php
// Conectar a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "base_de_datos");

// Obtener los datos del formulario 
$usuario =($_POST["usuario"]);
$telefono= ($_POST["telefono"]);
$email = ($_POST["email"]);

// Insertar los datos en la base de datos
$query = "INSERT INTO tabla_ejemplo (usuario, telefono, email) VALUES ('$usuario', '$telefono', '$email')";
mysqli_query($conexion, $query);

// Cerrar la conexión a la base de datos
mysqli_close($conexion);

?>