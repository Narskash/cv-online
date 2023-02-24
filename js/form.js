// Mensaje Poersonalizado
const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});

// Mensaje de Alerta
document.getElementById("formulario").addEventListener("submit", funEnviado);

function funEnviado() {
  alert("El formulario fue enviado correctamente");
}