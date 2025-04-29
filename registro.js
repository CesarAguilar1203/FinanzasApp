
document.addEventListener('DOMContentLoaded', function () {
  const registrar = document.getElementById('rboton');
  const inicia = document.getElementById('iniciars')
  inicia.addEventListener("click", () => {
    window.location.href = "index.html"; // Página del formulario de "Sign Up"
});
  registrar.addEventListener('click', function (e) {
    e.preventDefault(); // Evitar recarga de página

  })
});