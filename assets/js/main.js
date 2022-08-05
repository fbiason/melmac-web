//varlable
let tipoComida = ["Hamburguesa", "Pizza", "Empanadas", "Milanesa"];
let bebida = [
  "Agua con <br>",
  "Cerveza con <br>",
  "Vino con <br>",
  "Leche con <br>",
  "Mate con <br>",
  "Café con <br>",
  "Té con <br>",
  "Fernet con <br>",
  "Coca con <br>",
];

function usoDeDom() {
  let bebidaConComida =
    tipoComida[Math.floor(Math.random() * tipoComida.length)];
  let verBebida = bebida[Math.floor(Math.random() * bebida.length)];
  let verComida = `${verBebida}   ${bebidaConComida}`;
  document.getElementById("cualquierMenu").style.background = "yellow";
  document.getElementById("cualquierMenu").style.textAlign = "center";
  document.getElementById("cualquierMenu").innerHTML = verComida;
  document.getElementById("will").src = "assets/img/will.png";
}
