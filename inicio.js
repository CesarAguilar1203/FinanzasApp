document.addEventListener('DOMContentLoaded', function () {
document.getElementById("esconder").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
});
});
