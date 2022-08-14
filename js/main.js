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

/**
* Template Name: UpConstruction - v1.1.0
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

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
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper(".slides-2", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

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

//INICIO CARRITO PERSONALIZADO
//se crea la variable const llamada "comida" con el Array de Objetos
/*const comida = [
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
