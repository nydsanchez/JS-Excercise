let result = prompt("Quien es ?");

if (result === "Administrador") {
  let clave = prompt("introduzca su clave");

  if (clave == "El mejor") {
    alert("Bienvenido");
  } else if (clave == "" || clave == null) {
    alert("cancelado");
  } else {
    alert("contrasena incorrecta");
  }
} else if (result == "" || result == null) {
  alert("cancelado");
} else {
  alert("no te conozco");
}
