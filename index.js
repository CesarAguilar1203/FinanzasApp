// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb-77V0LWm3R_RRL4-LqWSUT2nLr_usnQ",
  authDomain: "bd-pgw.firebaseapp.com",
  projectId: "bd-pgw",
  storageBucket: "bd-pgw.firebasestorage.app",
  messagingSenderId: "1051963078622",
  appId: "1:1051963078622:web:b6562282b8aac52dc68f4f",
  measurementId: "G-4HDS0507V7"
};
// Referencia a la base de datos
const referencia = ref(database, 'usuarios/1');

// Guarda un usuario en la base de datos
set(referencia, {
  nombre: "César",
  correo: "cesar@example.com"
})
.then(() => {
  console.log("Datos guardados exitosamente.");
})
.catch((error) => {
  console.error("Error al guardar los datos: ", error);
});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('loginform');
  const correo = document.getElementById('email');
  const contraseña = document.getElementById('password');
  const botonVerificar = document.getElementById('boton');

  const mensaje = document.getElementById('mensaje');
  const emailcorrecto = '1';
  const passwordcorrecto = '1';
  const signup = document.getElementById('registrar')
  // Validar al hacer clic en "Sign In"
  botonVerificar.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    if (correo.value === emailcorrecto && contraseña.value === passwordcorrecto) {
      mensaje.textContent = '¡Acceso permitido! Bienvenido, César.';
      mensaje.style.color = 'green';
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
const spanSignUp = document.getElementById("registrar");


spanSignUp.addEventListener("click", () => {
  window.location.href = "registro.html"; // Página del formulario de "Sign Up"
});
});