
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('loginform');
    const correo = document.getElementById('email');
    const contraseña = document.getElementById('password');
    const botonVerificar = document.getElementById('boton')
    const mensaje = document.getElementById('mensaje')
    const emailcorrecto = 'cesaraguilar.2302082@gmail.com';
    const passwordcorrecto = 'jps.123454'
    botonVerificar.addEventListener('click', function (e) { // Aquí se corrige la sintaxis
      e.preventDefault(); // Evita que se recargue la página
  
      // Validar campos
      if (correo.value === emailcorrecto  && contraseña.value === passwordcorrecto) {
        mensaje.textContent = '¡Acceso permitido! Bienvenido, César';
        mensaje.style.color = 'green';
      } else {
        mensaje.textContent = 'Error: Correo o contraseña incorrectos.'; // Asegúrate de que 'nombre' esté definido
        mensaje.style.color = 'red';
  
        // Aquí podrías enviar los datos a un servidor o Firebase
        // formulario.reset(); // Si quieres limpiar el formulario
      }
    });
  });