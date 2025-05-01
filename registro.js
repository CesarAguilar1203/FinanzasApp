
document.addEventListener('DOMContentLoaded', function () {
  const registrar = document.getElementById('rboton');
  const inicia = document.getElementById('iniciars')
  inicia.addEventListener("click", () => {
    window.location.href = "index.html"; // Página del formulario de "Sign Up"
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // evita recargar

      const datos = new FormData(form);

      fetch("registro.php", {
          method: "POST",
          body: datos
      })
      .then(res => res.text())
      .then(data => {
          mensaje.innerHTML = data;

          if (data.includes("✅")) {
              form.reset(); // limpia el formulario si fue exitoso
          }
      })
      .catch(() => {
          mensaje.innerHTML = "<p style='color:red'>❌ Error de conexión</p>";
      });
  });
});
});