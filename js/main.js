//-------INICIO MEZCLA RARA-------//
let tipoComida = [
  `<img 
src="img/mezclas/hamburguesa.png"
style= 
  "width: 50%";
> Hamburguesa`,
  `<img 
src="img/mezclas/pizza.png"
style= 
  "width: 50%";
> Pizza`,
  `<img 
src="img/mezclas/empanadas.png"
style= 
  "width: 50%";
> Empanadas`,
  `<img 
src="img/mezclas/milanesa.png"
style= 
  "width: 50%";
> Milanesa`,
];
let bebida = [
  `<img 
  src="img/mezclas/agua.png"
  style= 
    "width: 50%";
  > Agua con...`,
  `<img 
  src="img/mezclas/fernet.png"
  style= 
    "width: 50%";
  > Fernet con...`,
  `<img 
  src="img/mezclas/cerveza.png"
  style= 
    "width: 50%";
  > Cerveza con...`,
  `<img 
  src="img/mezclas/vino.png"
  style= 
    "width: 50%";
  > Vino con...`,
  `<img 
  src="img/mezclas/leche.png"
  style= 
    "width: 50%";
  > Leche con...`,
  `<img 
  src="img/mezclas/mate.png"
  style= 
    "width: 50%";
  > Mate con...`,
  `<img 
  src="img/mezclas/cafe.png"
  style= 
    "width: 50%";
  > Cefé con...`,
  `<img 
  src="img/mezclas/mate.png"
  style= 
    "width: 50%";
  > Mate con...`,
  `<img 
  src="img/mezclas/coca.png"
  style= 
    "width: 50%";
  > Coca con...`,
  `<img 
  src="img/mezclas/te.png"
  style= 
    "width: 50%";
  > Té con...`,
];

function usoDeDom() {
  let bebidaConComida =
    tipoComida[Math.floor(Math.random() * tipoComida.length)];
  let verBebida = bebida[Math.floor(Math.random() * bebida.length)];
  let verComida = `${verBebida}   ${bebidaConComida}`;
  document.getElementById("cualquierMenu").style.textAlign = "center";
  document.getElementById("cualquierMenu").innerHTML = verComida;
  document.getElementById("will").src = "img/will.png";
}
//-------FIN MEZCLA RARA-------//

//-------INICIO PEDIDO PERSONALIZADO-------//
//se crea const llamada "agregarPedido". Luego se usa "querySelectorAll()" que me sirve para seleccionar todos los elementos que tengan la clase ".agregarPedido".
const agregarPedido = document.querySelectorAll(".agregarPedido");
//aplico forEach y la función flecha. Por cada "btnPedido" se agrega un addEventListener para registrar el evento "click" en la funcion btnAgregarPedido.
agregarPedido.forEach((btnPedido) => {
  btnPedido.addEventListener("click", btnAgregarPedido); //
});

//Uso querySelector para que me devuelva el primer elemento del documento//
const btnComprar = document.querySelector(".btnComprar");
btnComprar.addEventListener("click", finalizarCompra);

const comidaMenu = document.querySelector(".comida-menu");
//creo la función "btnAgregarPedido" con un parametro de nombre "agregar"
function btnAgregarPedido(agregar) {
  const btnClic = agregar.target;
  //la clase ".comida" la meto en la variable "comida"
  const comida = btnClic.closest(".comida");

  //creo las variables que tome las clases ".nombre", ".precio" y ".img". Luego uso textContent para que me devuelva el texto
  const comidaNombre = comida.querySelector(".nombre").textContent;
  const comidaPrecio = comida.querySelector(".precio").textContent;
  const comidaImg = comida.querySelector(".img").src;

  //creo la función "menuCompleto" que incorpore las variables comidaNombre, comidaPrecio y comidaImg
  menuCompleto(comidaNombre, comidaPrecio, comidaImg);
}

function menuCompleto(comidaNombre, comidaPrecio, comidaImg) {
  const nombreDeComida = comidaMenu.getElementsByClassName("totalPedidoNombre");
  for (let i = 0; i < nombreDeComida.length; i++) {
    if (nombreDeComida[i].innerText === comidaNombre) {
      let sumaComida =
        nombreDeComida[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          ".cantidadComida"
        );
      sumaComida.value++;
      verPrecioFinalPedido();
      return;
    }
  }

  //creo el elemento que voy a introducir al carrito usando dom, cada elemento que cree se va a introducir en el div
  const totalPedido = document.createElement("div");
  const totalPedidoComidas = `
  <div class="row totalPedido">
        <div class="col-6">
            <div class="card-comida d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${comidaImg} class="img-lista-menu">
                <h6 class="totalPedidoNombre text-truncate ml-3 mb-0">${comidaNombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 precioComidaPedida">${comidaPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="cantidadComida" type="number"
                    value="1">
                <button class="btn btn-danger cancelar-pedido" type="button">Cancelar Pedido</button>
            </div>
        </div>
    </div>`;
  totalPedido.innerHTML = totalPedidoComidas;
  comidaMenu.append(totalPedido);

  totalPedido
    .querySelector(".cancelar-pedido")
    .addEventListener("click", borrarPedido);
  totalPedido
    .querySelector(".cantidadComida")
    .addEventListener("change", cambiarPedido);

  verPrecioFinalPedido();
}

//funcion para ver el precio final del pedido
function verPrecioFinalPedido() {
  let total = 0;
  const precioFinalPedido = document.querySelector(".precioFinalPedido");

  const verTotalComidas = document.querySelectorAll(".totalPedido");

  verTotalComidas.forEach((verTotalComida) => {
    const verPrecioComidaPedida = verTotalComida.querySelector(
      ".precioComidaPedida"
    );
    const precioComidaPedida = Number(
      verPrecioComidaPedida.textContent.replace("$", "")
    );
    const cantidadComidaTotal = verTotalComida.querySelector(".cantidadComida");
    const cantidadComida = Number(cantidadComidaTotal.value);
    total = total + precioComidaPedida * cantidadComida;
  });
  precioFinalPedido.innerHTML = `${total.toFixed(2)}$ `;
}
//funcion para borrar pedido
function borrarPedido(agregar) {
  const btnClick = agregar.target;
  btnClick.closest(".totalPedido").remove();
  verPrecioFinalPedido();
}

//funcion para cambiar pedido
function cambiarPedido(agregar) {
  const input = agregar.target;
  input.value <= 0 ? (input.value = 1) : null;
  verPrecioFinalPedido();
}

//funcion para terminar compra
function finalizarCompra() {
  comidaMenu.innerHTML = "";
  verPrecioFinalPedido();
}
//-------FIN PEDIDO PERSONALIZADO-------//

//-------INICIO EMAIL-------//
//creo la clase "Contacto" que va a tener un constructor y recibe al objeto "contacto"
class Contacto {
  constructor(contacto) {
    //el constructor tiene 4 propiedades, son las que van a estar dentro de los formularios
    this.nombre = contacto.nombreContacto;
    this.email = contacto.emailContacto;
    this.asunto = contacto.asuntoContacto;
    this.mensaje = contacto.mensajeContacto;
  }
  verDatos() {
    this.nombre = this.nombre.toUpperCase();
    let contenido = `<b>Nombre:</b> ${this.nombre}<br>
    <b>Email:</b> ${this.email}<br>
    <b>Asunto:</b> ${this.asunto}<br>
    <b>Mensaje:</b> ${this.mensaje}<br>`;
    document.getElementById("resultado").innerHTML = contenido;
  }
}

function guardarDatos() {
  //meciono los 4 campos del formulario
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  const datos = {
    nombreContacto: nombre,
    emailContacto: email,
    asuntoContacto: asunto,
    mensajeContacto: mensaje,
  };

  console.log(datos);
  guardarDatosEnLS(datos);

  let datosFormulario = recuperarDatos();
  console.log(datosFormulario);
  const datosContacto = new Contacto(datosFormulario);
  console.log(datosContacto);
  datosContacto.verDatos();
}

function guardarDatosEnLS(datos) {
  //con JSON.stringify lo guardo en "datosFormulario"
  localStorage.setItem("datosContacto", JSON.stringify(datos));
  console.log("Sus datos se guardaron en en Local Storage");
}

function recuperarDatos() {
  return JSON.parse(localStorage.getItem("datosContacto"));
}
document
  .getElementById("enviar-mensaje")
  .addEventListener("click", guardarDatos);
//-------FIN EMAIL-------//
