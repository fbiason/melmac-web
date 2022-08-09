//varlable
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
}
