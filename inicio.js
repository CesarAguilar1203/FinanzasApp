
function mostrarSeccion(seccionId) {
  document.querySelectorAll('.seccion').forEach(el => el.style.display = 'none');
  const seccion = document.getElementById(seccionId);
  if (seccion) {
    seccion.style.display = 'block';
  } else {
    console.error(`Error: La sección con ID '${seccionId}' no existe.`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("esconder");
  const sidebar = document.querySelector(".sidebar");
  const hoverArea = document.getElementById("hover-area");

  boton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    contenido.style.marginLeft = sidebar.classList.contains("hidden") ? "0" : "250px";

  });

  hoverArea.addEventListener("mouseenter", () => {
    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
    }
    function actualizarReloj() {
    const now = new Date();
    const horas = now.getHours();
    const minutos = now.getMinutes();
    const ampm = horas >= 12 ? "PM" : "AM";
    const horasFormato12 = horas % 12 || 12; // Convierte 24h a 12h
    const diaSemana = now.toLocaleDateString("es-ES", { weekday: "long" });
    const dia = now.getDate();
    const mes = now.toLocaleDateString("es-ES", { month: "long" });

    // Actualizar contenido en HTML
    document.querySelector(".time-text span").innerText = `${horasFormato12}:${minutos.toString().padStart(2, "0")}`;
    document.querySelector(".time-sub-text").innerText = ampm;
    document.querySelector(".day-text").innerText = `${diaSemana}, ${dia} de ${mes}`;

    // Actualizar cada segundo
    setTimeout(actualizarReloj, 1000);
}

// Iniciar reloj cuando la página cargue
document.addEventListener("DOMContentLoaded", actualizarReloj);

  });
});

