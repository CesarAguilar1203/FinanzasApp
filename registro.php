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
    $password = password_hash(trim($_POST['password']), PASSWORD_DEFAULT); // Seguridad

    $consulta = "INSERT INTO usuarios(nombre, email, password) VALUES ('$name', '$email','$password')";
    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado) {
        // Redirige a otro archivo HTML después de un registro exitoso
        header("Location: index.html"); // Aquí coloca la página a la que quieras redirigir
        exit();
    } else {
        echo "<p style='color:red'>❌ Error al registrar</p>";
    }
} else {
    echo "<p style='color:orange'>⚠️ Llena todos los campos</p>";
}
?>