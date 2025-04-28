
  
  document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('loginform');
  const correo = document.getElementById('email');
  const contraseña = document.getElementById('password');
  const botonVerificar = document.getElementById('boton');
  const mensaje = document.getElementById('mensaje');
  const emailcorrecto = '1';
  const passwordcorrecto = '1';
  const signup = document.getElementById('registrar')
  const spanSignUp = document.getElementById('r1')
  spanSignUp.addEventListener("click", () => {
    window.location.href = "registro.html"; // Página del formulario de "Sign Up"
  });
  // Validar al hacer clic en "Sign In"
  botonVerificar.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    if (correo.value === emailcorrecto && contraseña.value === passwordcorrecto) {
      mensaje.textContent = '¡Acceso permitido! Bienvenido, César.';
      mensaje.style.color = 'green';
      botonVerificar.addEventListener("click", () => {
        window.location.href = "inicio.html"; // Página del formulario de "Sign Up"
      });
    } else {
      mensaje.textContent = 'Error: Correo o contraseña incorrectos.';
      mensaje.style.color = 'red';
    }
  });

  // Evitar recarga al presionar "Enter"
  correo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      botonVerificar.click();
    }
  });

  contraseña.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      botonVerificar.click();
    }
  });

  signup.addEventListener('click', function (e){
    e.preventDefault();
    contenido.style.display = "block";
  });

});