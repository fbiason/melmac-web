//INICIO MEZCLA RARA
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
} /*/
//FIN MEZCLA RARA

//--------------------------------//
//--------------------------------//
//--------------------------------//
/**BOOTSTRAP
*/
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
//FIN BOOTSTRAP
//--------------------------------//
//--------------------------------//
//--------------------------------//

//----------------------------------------//
//----------------------------------------//
//----------------------------------------//
//INICIO CARRITO PERSONALIZADO//
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
    .addEventListener("cambiar", cambiarPedido);

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

//----------------------------------------//
//----------------------------------------//
//----------------------------------------//

/*
//se crea la variable const llamada "comida" con el Array de Objetos
const comida = [
  {
    id: 1,
    nombre: "Hamburguesa",
    descripcion: "Extra queso cheddar",
    precio: 1100,
    img: "assets/img/comidas/hamburguesa.png",
  },
  {
    id: 2,
    nombre: "Pizza",
    descripcion: "Muzarella",
    precio: 850,
    img: "assets/img/comidas/pizza-muza.jpeg",
  },
  {
    id: 3,
    nombre: "Empanadas",
    descripcion: "Bondiola x14",
    precio: 1300,
    img: "assets/img/comidas/empanadas-bondiola.png",
  },
  {
    id: 4,
    nombre: "Sandwich",
    descripcion: "De Pollo con papas",
    precio: 850,
    img: "assets/img/comidas/sandwich-pollo.jpeg",
  },
  {
    id: 5,
    nombre: "Pizza",
    descripcion: "Muzarella",
    precio: 1300,
    img: "assets/img/comidas/pizza-muza.jpeg",
  },
  {
    id: 6,
    nombre: "Mila Melmac",
    descripcion: "Milanesa con papas",
    precio: 2500,
    img: "assets/img/comidas/mila-melmac.jpg",
  },
];

//se guarda el Array de Objetos en el localStorage
//se pone como parametro el Array de Objetos "comida"
function comidaSeleecionada(comida) {
  localStorage.setItem("comida"), JSON.stringify(comida);
}
//se crea otra función para cargar las comidas al carrito por eso se usa el "getItem"
//se parsea para que devuelva el Objeto original
function comidaEnCarrito() {
  return JSON.parse(localStorage.getItem("comida")) || [];
}

function armarMenu() {
  const comida = comidaEnCarrito();
  let menu = " ";

  //va a hacer una iteracion con los platos que hay para elegir (6 por ahora)
  //llamo las variables nombre, descripcion, precio, img con ${}
  comida.forEach((comidas) => {
    menu += `
    <div class="col-md-3">
        <div class="card">
        <img
        class="card-img-top"
        src="assets/img/comidas/${comida.img}" 
        alt="${comida.nombre}"
      />
          <div class="card-body">
            <h5>${comida.nombre}</h5>
                <div>
                  <span class="text-warning me-2">
                  <i class="fas fa-map-marker-alt"></i></span>
                  <span class="text-primary">${comida.descripcion}</span>
            </div>
            <span class="text-1000 fw-bold">$${comida.precio}</span>
          </div>
        </div>
      <div class="d-grid gap-2">
      <a 
        class="btn btn-lg btn-danger"
        href="#!"
        role="button">Subir al carrito</a>
      </div>
    </div>`;
  });

  document.getElementById("comida").innerHTML = menu;
}

//ejecuto la funciones
comidaSeleecionada(comida);
armarMenu();

//FIN CARRITO PERSONALIZADO/*/
