<?php
include('conexion.php');
session_start();

// Validar si se recibieron los datos
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Evitar inyección SQL (mejor usar sentencias preparadas en producción)
    $email = mysqli_real_escape_string($conexion, $email);
    $password = mysqli_real_escape_string($conexion, $password);

    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";
    $resultado = mysqli_query($conexion, $sql);
    $filas = mysqli_num_rows($resultado);

    if ($filas > 0) {
        $_SESSION['email'] = $email;
        header("Location: catalogo.html");
        exit();
    } else {
        // Redirige a index con error por GET
        header("Location: index.html?error=1");
        exit();
    }

    mysqli_free_result($resultado);
    mysqli_close($conexion);
} else {
    // Redirige si se accede directamente al archivo sin POST
    header("Location: index.html");
    exit();
}
?>
