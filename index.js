document.addEventListener('DOMContentLoaded', function () {
  const signup = document.getElementById('r1'); // ✅ Registro
  const olvide = document.getElementById('cont'); // Recuperar contraseña
  // Redirección al formulario de recuperación de contraseña
  if (olvide) {
      olvide.addEventListener("click", () => {
          window.location.href = "recuperar.html"; 
      });
  }

  // ✅ Redirección al formulario de registro
  if (signup) {
      signup.addEventListener("click", () => {
          window.location.href = "registro.html";
      });
  }
});