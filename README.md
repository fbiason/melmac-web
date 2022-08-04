# melmac-web

Desarrollado por BIASON FRANCO
Clase: JavaScript
Profesor: Verón Javier
Tutor: Baladi Jean Paul
mail: franco.biason@gmail.com

28/07/2022

1ra Entrega:
\*const productos = [
//creacionDeArray - elArraySeLlamaProductos
{ id: 1, nombre: "Hamburguesa", precio: 1100 }, //definiciónDeObjetos
{ id: 2, nombre: "Empanadas", precio: 1300 },
{ id: 3, nombre: "Pizza", precio: 850 },
{ id: 4, nombre: "Papas Fritas", precio: 1100 },
{ id: 5, nombre: "Milanesa", precio: 2500 },
{ id: 6, nombre: "Sandwiches", precio: 1200 },
];

function envio(gasto) {
//funcion - nombreDeFuncion - (parametro)
if (gasto > 2000) {
//si (parametro) > 2000
return "Su envio es gratis"; //me informa mediante string que mi envio es gratis
} else {
//caso contrario
return "Debe abonar $300 el envio"; //me informa mediante string que debo abonar $300 el envio
}
}

class Producto {
constructor(objeto) {
this.id = objeto.id; //la propiedad ID coincide con la variable ID
this.nombre = objeto.nombre;
this.precio = objeto.precio;
this.descuento = 10;
}

aplicarDescuento() {
if (pedido.length > 1) {
//cuando se aplica la propiedad length a un array nos devuelve la cantidad de elementos que tiene dicho array. Si el array pedido tiene más de 2 objetos se aplica el descuento
this.precio = this.precio - (this.precio \* this.descuento) / 100;
}
}
}

const pedido = []; //Array del Pedido - Productos seleccionado por el cliente

function agregarProducto(producto) {
//funcion - nombreDeFuncion - (parametro)
pedido.push(producto); //Agrego el Producto al Array Pedido
console.log("Producto Agregado!");
console.log(pedido);
}

function eliminarProducto(id) {
//funcion - nombreDeFuncion - (parametro)
let pos = pedido.indexOf((elemento) => elemento.id == id); //IndexOf: Busco la posición donde está el Producto en mi pedido. La condición es que la variable "elemento" recorra el Array "pedido" y compare si es = al ID
pedido.splice(pos, 1); //splice: cuantos elementos quiero borrar
console.log("Producto Eliminado!");
console.log(pedido);
}

function buscarProducto(id) {
return productos.find((elemento) => elemento.id == id); //Devuelve el Producto (Objeto) por el ID especificado.
}

function cargarProductosPedido() {
//la funcion va a mostrar el menú donde se cargan los productos al carrito
let salida = //en la variable SALIDA se carga cada uno de los elementos Productos y los muestra en un prompt
"Seleccione los productos que desea agregar a su pedido. Clic en CANCELAR para terminar la carga:\n\n";

for (let producto of productos) {
//for...of: se declaro la varialbe Producto y la lista Productos
salida +=
producto.id + " - " + producto.nombre + " $" + producto.precio + "\n";
}

let id_producto = 0;

while (id_producto != null) {
let id_producto = prompt(salida); //la variable ID_PRODCUTO va a tener el prompt de la variable SALIDA

    if (id_producto != null) {
      id_producto = parseInt(id_producto);
      //console.log(id_producto); // Número del Producto
      let producto = buscarProducto(id_producto);
      //console.log(producto); // Objeto Producto
      agregarProducto(producto);
    } else {
      break;
    }

}
}

function mostrarProductosAEliminar() {
let salida = "";

if (pedido.length > 0) {
salida =
"Seleccione el Producto a Eliminar. Pulse Cancelar para no Eliminar ninguno.\n";

    for (let producto of pedido) {
      salida +=
        producto.id + " - " + producto.nombre + " $" + producto.precio + "\n";
    }

    let id_producto = prompt(salida);

    if (id_producto != null) {
      id_producto = parseInt(id_producto);
      eliminarProducto(id_producto);
    }

    mostrarProductosPedido();

} else {
salida = "No se encontraron Productos en el Pedido!";
alert(salida);
}
}

function mostrarProductosPedido() {
let salida = " ";

if (pedido.length > 0) {
salida = "Productos Seleccionados:\n";
let total_pagar = 0;

    for (let producto_pedido of pedido) {
      let producto = new Producto(producto_pedido);
      console.log("Precio Original: $" + producto.precio);
      producto.aplicarDescuento(); //si el pedido contiene más de 2 productos se aplica el 10% de descuento
      console.log("Precio con 10% de descuento: $" + producto.precio);
      total_pagar += producto.precio;
      salida +=
        producto.id + " - " + producto.nombre + " $" + producto.precio + "\n";
    }

    salida += "\n Total a Pagar: $" + total_pagar; //la variable salida se concatena con la variable total_pagar

} else {
salida = "No se encontraron Productos en el Pedido!";
}

alert(salida);
}

cargarProductosPedido();
mostrarProductosAEliminar();

let total = pedido.map((x) => x.precio).reduce((a, b) => a + b); //map me esta mostrando todos los precios del array. Reduce me sumo todos los precios del array

console.log(total);
alert(envio(total));\*/

//--------------------------------------------//
