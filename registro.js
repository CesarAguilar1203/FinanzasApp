document.addEventListener('DOMContentLoaded', function () {
    const registrar = document.getElementById('rboton');  // Botón de registro
    const inicia = document.getElementById('iniciars');  // Botón para iniciar sesión
    const form = document.getElementById('registroForm');  // Formulario de registro
    const mensaje = document.getElementById('mensaje');  // Mensaje (si es necesario)

    // Redirige al formulario de inicio de sesión cuando se hace clic en 'iniciars'
    if (inicia) {
        inicia.addEventListener("click", () => {
            window.location.href = "index.html"; // Página del formulario de inicio de sesión
        });
    }

    // Manejo del envío del formulario
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();  // Evita la recarga de la página

            const datos = new FormData(form);

            // Aquí puedes manejar los datos del formulario (enviarlos a un servidor o procesarlos)
            console.log(datos);  // Muestra los datos en la consola para ver si está funcionando

            // Si todo está bien, puedes enviar los datos con fetch, AJAX o alguna otra técnica.
        });
    }
});
