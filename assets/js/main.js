// ENTRADA > PROCESO > SALIDA //

/*CONTROL DE FLUJOS*/

//Carta completa
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
}

/*CONDICIONES COMPUESTA CON ||*/
let eleccion = prompt(
  "¿Qué tipo de " + comida + " desea (vegano o con carne)?"
);
while (
  eleccion != "vegano" &&
  eleccion != "vegetariano" &&
  eleccion != "con carne"
) {
  eleccion = prompt("¿Qué tipo de " + comida + " desea (vegano o con carne)?");
}
if (eleccion == "vegano" || eleccion == "vegetariano") {
  alert("No lleva carne");
} else {
  alert("Lleva carne");
}

/*CICLOS*/
//--- FOR ---//
//let soloPares = parseInt(prompt("Indique hasta que número quiere sumar"));

//for (let i = 2; i <= soloPares; i = i + 2) {
//  alert("Solo sumamos pares, desde " + i + " hasta " + soloPares);
//}

//--- WHILE ---//
//let cantidadPanchos = prompt("¿Cuantos Panchos puede comer?");
//while (cantidadPanchos != "PROVECHO") {
//  alert("Acaba de comer " + cantidadPanchos + " Panchos");
//  cantidadPanchos = prompt("¿Cuantas Panchos más desea comer?");
//}

//---DO... WHILE---//
//let clave = "CoderHouse";

//do {
//  clave = prompt("Introduzca la clave");
//} while (clave != "CoderHouse");
