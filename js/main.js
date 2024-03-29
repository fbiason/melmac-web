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
                <h6 class="totalPedidoNombre text-truncate ml-3 mb-0 mx-3">${comidaNombre}</h6>
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
                <input class="cantidadComida text-center" type="number"
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
  precioFinalPedido.innerHTML = `$ ${total.toFixed(2)}`;
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

  mostrarDatos() {
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

  let datosStorage = cargarDatosEnLS();
  console.log(datosStorage);
  const datosContacto = new Contacto(datosStorage);
  console.log(datosContacto);
  datosContacto.mostrarDatos();
}
//con JSON.stringify lo guardo en "datosFormulario"
function guardarDatosEnLS(datos) {
  localStorage.setItem("datosContacto", JSON.stringify(datos));
  console.log("Los datos del Formulario se guardaron en LocalStorage");
}

function cargarDatosEnLS() {
  return JSON.parse(localStorage.getItem("datosContacto"));
}

document.getElementById("btn-form").addEventListener("click", guardarDatos);
//-------FIN EMAIL-------//

//----SWEET ALERT----//
const btn = document.querySelector("#comprar");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Finalizo su compra?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Bueno dale 🙂",
    denyButtonText: "Sigo comprando 🐷",
    customClass: {
      actions: "my-actions",
      cancelButton: "order-1 right-gap",
      confirmButton: "order-2",
      denyButton: "order-3",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Su pedido se realizo con éxito, ¡Buen provecho! 🍽️",
        "",
        "success"
      );
    } else if (result.isDenied) {
      Swal.fire("Come... ¡O morire! 🐰", "", "");
    }
  });
});

//----SWEET ALERT - POLITICA DE PRIVACIDAD ----//
const privacidad = document.querySelector("#privacidad");
privacidad.addEventListener("click", () => {
  Swal.fire(
    "Poíticas de Privacidad",
    "              <b>Quienes somos</b><br>    La direccion de nuestra web es: https://melmacryc.com.ar.<br><br>    <b>Comentarios</b><br>    Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.<br><br>    <b>Cookies</b><br>   Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre y dirección de correo electrónico en cookies. Esto es para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año. Cuando te conectes a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.<br><br>    <b>Contenido incrustado de otros sitios web</b><br>    Los articulos de este sitio pueden incluir contenido incrustado (por ejemplo, imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web. Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.<br><br>      <b>Cuanto tiempo conservamos tus datos</b><br>    Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente, en lugar de mantenerlos en una cola de moderación.<br><br>    <b>Que derechos tienes sobre tus datos</b><br>    Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.<br><br>    <b>Donde enviamos tus datos</b><br>  Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.",
    "info"
  );
});

//----APLICANDO API----//
const btnApiBuscar = document.getElementById("search-btn");
const comidaApi = document.getElementById("comida-api");
const apiDetalleContent = document.querySelector(".api-detalles-content");
const btnApiClose = document.getElementById("btn-api-close");

// Aplico Event Linstener con click
btnApiBuscar.addEventListener("click", apiRecetaComida);
comidaApi.addEventListener("click", getReceta);
btnApiClose.addEventListener("click", () => {
  apiDetalleContent.parentElement.classList.remove("ver-receta");
});

// Creo la función "apiRecetaComida" e incorporo el fetch con el enlace a la API para obtener la lista de comida con su receta
function apiRecetaComida() {
  let buscadorApi = document.getElementById("buscador-api").value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${buscadorApi}`)
    .then((response) => response.json())
    .then((data) => {
      let cardComidaApi = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          cardComidaApi += `
                    <div class = "comida-item" data-id = "${meal.idMeal}">
                        <div class = "api-img">
                            <img src = "${meal.strMealThumb}" alt = "comida">
                        </div>
                        <div class = "comida-api-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "btn-receta">Ver receta</a>
                        </div>
                    </div>
                `;
        });
        comidaApi.classList.remove("sin-comida");
      } else {
        cardComidaApi =
          "La comida seleccionada no se encuentra <p>(quizas deba escribirlo en ingles...)</p>";
        comidaApi.classList.add("sin-comida");
      }

      comidaApi.innerHTML = cardComidaApi;
    });
}

// Recetas de comida
function getReceta(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn-receta")) {
    let mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((response) => response.json())
      .then((data) => recetaDeComida(data.meals));
  }
}

function recetaDeComida(plato) {
  console.log(plato);
  plato = plato[0];
  let cardComidaApi = `
        <h2 class = "receta-title">${plato.strMeal}</h2>
        <p class = "receta-categoria">${plato.strCategory}</p>
        <div class = "receta-info">
            <h3>Receta:</h3>
            <p>${plato.strInstructions}</p>
        </div>
        <div class = "receta-img">
            <img src = "${plato.strMealThumb}" alt = "">
        </div>
        <div class = "receta-link">
            <a href = "${plato.strYoutube}" target = "_blank">Ver video</a>
        </div>
    `;
  apiDetalleContent.innerHTML = cardComidaApi;
  apiDetalleContent.parentElement.classList.add("ver-receta");
}
