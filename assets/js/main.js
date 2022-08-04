//varlable
let tipoComida = ["Hamburguesa", "Pizza", "Empanadas", "Milanesa"];
let mezcla = [
  "Papas Fritas con <br>",
  "Salchichas con <br>",
  "Tomate con <br>",
  "Sopa con <br>",
  "Postre con <br>",
  "Pescado con <br>",
];

function displayCard() {
  let comidaMezclada =
    tipoComida[Math.floor(Math.random() * tipoComida.length)];
  let masMezcla = mezcla[Math.floor(Math.random() * mezcla.length)];
  let verComida = `${masMezcla}   ${comidaMezclada}`;
  document.getElementById("cualquierMenu").style.background = "yellow";
  document.getElementById("cualquierMenu").style.textAlign = "center";
  document.getElementById("cualquierMenu").innerHTML = verComida;
}
