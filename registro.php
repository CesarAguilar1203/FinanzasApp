<?php
include("conexion.php");

if (
    isset($_POST['registrar']) &&
    !empty($_POST['nombre']) &&
    !empty($_POST['email']) &&
    !empty($_POST['password'])
) {
    $name = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']); // Sin hash

    $consulta = "INSERT INTO usuarios(nombre, email, password) VALUES ('$name', '$email', '$password')";
    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado) {
        header("Location: index.html"); // Página de redirección tras el registro
        exit();
    } else {
        echo "<p style='color:red'>❌ Error al registrar</p>";
    }
} else {
    echo "<p style='color:orange'>⚠️ Llena todos los campos</p>";
}
?>