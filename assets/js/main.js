// ENTRADA > PROCESO > SALIDA //

/*// function //*/
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

const seleccionComida = () => {
  do {
    var opcion = parseInt(prompt(menu));
    if (!isNaN(opcion)) condicion = false;
  } while (condicion);

  let comida = { nombre: "", precio: 1 };

  switch (opcion) {
    case 1:
      (comida.nombre = "Hamburguesa"), (comida.precio = 1100);
      return comida;
    case 2:
      (comida.nombre = "Empanadas"), (comida.precio = 1300);
      return comida;
    case 3:
      (comida.nombre = "Pizza"), (comida.precio = 850);
      return comida;
    case 4:
      (comida.nombre = "Papas Fritas"), (comida.precio = 1000);
    default:
      alert("La opción no es correcta");
  }
};

const comida = seleccionComida();

/*CONDICIONES COMPUESTA CON &&*/
let eleccion = prompt(
  "¿Qué tipo de " + comida.nombre + " desea (vegano o carne)?"
);
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

const costoDeEnvio = envio(comida.precio);
alert(costoDeEnvio);
