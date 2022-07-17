//Desarrollado por BIASON FRANCO
//Clase: JavaScript
//mail: franco.biason@gmail.com

// ENTRADA > PROCESO > SALIDA //

//for
//while
//do ... while

//CREAR UN ALGORÍTMO UTILIZANDO UN CICLO

//Formato: Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “claseApellido”.

//Usamos la instrucción for para repetir un número fijo de veces.
//while cuando queremos repetir algo hasta que se deje de cumplir una condición.

//>> Crear un algoritmo que repita un bloque de instrucciones.
//En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

//>>Aspectos a incluir en el entregable:
//Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.

//>>Ejemplo:
//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

//for (desde; hasta; actualización) {}
//EN ESTE EJEMPLO FOR CUENTA DE 0 A 10
//for (let 1 = 0; i <= 10; i++) {
//  alert (i);
//}

/// SOLO FOR ///
//for (let i = 1; i <= 3; i++) {
//  let ingresarNombre = prompt("Ingresar nombre");
//  alert(" Turno N° " + i + " Nombre " + ingresarNombre);
//}

/// FOR + BREAK ///
//let ingresarNumero = parseInt(prompt("Ingresar Numero"));
//for (let i = 1; i <= 10; i++) {
//  let resultado = ingresarNumero * i;
//  alert(ingresarNumero + " x " + i + " = " + resultado);
//  if (i == 5) {
//    break;
// }
//}

/// FOR + CONTINUE///
//let sumarSinDiez = parseInt(prompt("Ingresar Numero"));
//for (let i = 8; i <= 12; i++) {
//  let resultado = sumarSinDiez + i;
//  if (i == 10) {
//    continue;
//  }
//  alert(sumarSinDiez + " + " + i + " = " + resultado);
//}

/// WHILE ///
//let entrada = prompt("Ingresar un dato");
//while (entrada != "ESC") {
//  alert("El usuario ingreso " + entrada);
//  entrada = prompt("Ingresar otro dato");
//}

//DO..WHILE//
let numero = 0;
do {
  numero = prompt("Ingresar Número");
  console.log(numero);
} while (parseInt(numero));
