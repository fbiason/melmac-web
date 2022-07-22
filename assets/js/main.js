// ENTRADA > PROCESO > SALIDA //

/*// FUNCTION //*/
function envio(gasto) {
  if (gasto > 1000) {
    return "Su envio es gratis";
  } else {
    return "Debe abonar $300 el envio";
  }
}

//Menú
let menu =
  "Seleccione el menú: \n" +
  "1. Hamburguesa \n" +
  "2. Empanadas \n" +
  "3. Pizza \n" +
  "4. Papas Fritas \n";

var condicion = true;

do {
  var opcion = parseInt(prompt(menu));
  if (!isNaN(opcion)) condicion = false;
} while (condicion);

let comida;

switch (opcion) {
  case 1:
    comida = "Hamburguesa";
    break;
  case 2:
    comida = "Empanadas";
    break;
  case 3:
    comida = "Pizza";
    break;
  case 4:
    comida = "papas fritas";
  default:
    alert("La opción no es correcta");
}

/*CONDICIONES COMPUESTA CON &&*/
let eleccion = prompt("¿Qué tipo de " + comida + " desea (vegano o carne)?");
while (
  eleccion != "vegano" &&
  eleccion != "vegetariano" &&
  eleccion != "carne"
) {
  eleccion = prompt("¿Qué tipo de " + comida + " desea (vegano o carne)?");
}
if (eleccion == "vegano" || eleccion == "vegetariano") {
  alert("No lleva carne");
} else {
  alert("Lleva carne");
}
