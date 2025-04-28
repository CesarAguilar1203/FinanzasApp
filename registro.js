import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyAb-77V0LWm3R_RRL4-LqWSUT2nLr_usnQ",
  authDomain: "bd-pgw.firebaseapp.com",
  projectId: "bd-pgw",
  storageBucket: "bd-pgw.firebasestorage.app",
  messagingSenderId: "1051963078622",
  appId: "1:1051963078622:web:b6562282b8aac52dc68f4f",
  measurementId: "G-4HDS0507V7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', function () {
  const nombre = document.getElementById('nombre1');
  const apellido = document.getElementById('nombre2');
  const correo = document.getElementById('rcorreo');
  const contraseña = document.getElementById('rcontraseña');
  const confirmarcontraseña = document.getElementById('rconfirmar');
  const registrar = document.getElementById('rboton');

  registrar.addEventListener('click', function (e) {
    e.preventDefault(); // Evitar recarga de página

    // Validar campos vacíos
    if (!nombre.value || !apellido.value || !correo.value || !contraseña.value) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Validar si las contraseñas coinciden
    if (contraseña.value !== confirmarcontraseña.value) {
      alert("Las contraseñas no coinciden. Intenta de nuevo.");
      return;
    }

    // Encriptar la contraseña
    bcrypt.hash(contraseña.value, 10, (err, hash) => {
      if (err) {
        console.error("Error al encriptar la contraseña:", err);
      } else {
        console.log("Contraseña encriptada:", hash);

        // Crear referencia en Firebase y guardar datos
        const referencia = ref(database, `usuarios/${correo.value}`);
        set(referencia, {
          nombre: nombre.value,
          apellido: apellido.value,
          correo: correo.value,
          contraseña: hash // Guarda el hash
        })
        .then(() => {
          alert("Usuario registrado exitosamente.");
        })
        .catch((error) => {
          console.error("Error al registrar el usuario: ", error);
        });
      }
    });
  });
});