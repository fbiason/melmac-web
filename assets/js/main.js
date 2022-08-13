/*///inicio sección Mezcla Rara
let tipoComida = [
  `<img 
src="assets/img/mezclas/hamburguesa.png"
style= 
  "width: 50%";
> Hamburguesa`,
  `<img 
src="assets/img/mezclas/pizza.png"
style= 
  "width: 50%";
> Pizza`,
  `<img 
src="assets/img/mezclas/empanadas.png"
style= 
  "width: 50%";
> Empanadas`,
  `<img 
src="assets/img/mezclas/milanesa.png"
style= 
  "width: 50%";
> Milanesa`,
];
let bebida = [
  `<img 
  src="assets/img/mezclas/agua.png"
  style= 
    "width: 50%";
  > Agua con...`,
  `<img 
  src="assets/img/mezclas/fernet.png"
  style= 
    "width: 50%";
  > Fernet con...`,
  `<img 
  src="assets/img/mezclas/cerveza.png"
  style= 
    "width: 50%";
  > Cerveza con...`,
  `<img 
  src="assets/img/mezclas/vino.png"
  style= 
    "width: 50%";
  > Vino con...`,
  `<img 
  src="assets/img/mezclas/leche.png"
  style= 
    "width: 50%";
  > Leche con...`,
  `<img 
  src="assets/img/mezclas/mate.png"
  style= 
    "width: 50%";
  > Mate con...`,
  `<img 
  src="assets/img/mezclas/cafe.png"
  style= 
    "width: 50%";
  > Cefé con...`,
  `<img 
  src="assets/img/mezclas/mate.png"
  style= 
    "width: 50%";
  > Mate con...`,
  `<img 
  src="assets/img/mezclas/coca.png"
  style= 
    "width: 50%";
  > Coca con...`,
  `<img 
  src="assets/img/mezclas/te.png"
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
  document.getElementById("will").src = "assets/img/will.png";
}/*/
//fin sección mezcla rara

//Inicio Carrito Arma tu menú personalizado
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
