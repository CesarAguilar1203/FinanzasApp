document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("esconder");  // Botón para ocultar/mostrar la sidebar
  const sidebar = document.querySelector(".sidebar");  // Sidebar
  const hoverArea = document.getElementById("hover-area");  // Área para interactuar con la sidebar
  const mainContent = document.querySelector(".main-content");  // Contenedor del contenido principal

  // Verifica si la sidebar ya está visible al cargar la página
  if (!sidebar.classList.contains("hidden")) {
    mainContent.style.marginLeft = "250px"; // Empuja el contenido si la sidebar está abierta al inicio
  }

  // Evento al hacer click en el botón para esconder/mostrar sidebar
  boton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    mainContent.style.marginLeft = sidebar.classList.contains("hidden") ? "0" : "250px";
  });

  // Mostrar la sidebar cuando el área de hover es interactuada
  hoverArea.addEventListener("mouseenter", () => {
    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
      mainContent.style.marginLeft = "250px"; // Empujar el contenido
    }
  });

  // Función para mostrar la sección correspondiente
  function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(el => el.style.display = 'none');
    
    // Mostrar la sección correspondiente
    const seccion = document.getElementById(seccionId);
    if (seccion) {
      seccion.style.display = 'block';
    } else {
      console.error(`Error: La sección con ID '${seccionId}' no existe.`);
    }
  }

  // Agregar eventos a los enlaces del menú
  const enlacesMenu = document.querySelectorAll('.sidebar-nav .nav-link');
  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      // Prevenir el comportamiento por defecto del enlace
      e.preventDefault();
      
      // Obtener el ID de la sección desde el atributo data-seccion
      const seccionId = e.target.closest('a').getAttribute('data-seccion');
      
      // Llamar a la función para mostrar la sección
      mostrarSeccion(seccionId);
    });
  });
});
