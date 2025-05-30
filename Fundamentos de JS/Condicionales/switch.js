/* ----------------------------------------------------------
Reescribe el "switch" en un "if"
Escribe el código utilizando if..else que corresponda al siguiente switch:

switch (navegador) {
  case 'Edge':
    alert( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    alert( '¡Esperamos que esta página se vea bien!' );
}
-------------------------------------------------------------------- */

let navegador = prompt("Introduce el nombre de tu navegardor: ", "");

if (
  navegador === "Chrome" ||
  navegador === "Firefox" ||
  navegador === "Safari" ||
  navegador === "Opera"
) {
  alert("Esta bien, soportamos estos navegadores también");
} else if (navegador === "Edge") {
  alert("¡Tienes Edge!");
} else {
  alert("¡Esperamos que esta página se vea bien!");
}
