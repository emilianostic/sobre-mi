var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
var empate = "empate";
var ganaUser = "Gana usuario";
var ganaComputadora = "Gana Computadora";
let gamer = "";
var ppt = ["piedra", "papel", "tijeras"];
const IngresarName = document.getElementById("ingresar")
const gamerEleccion = document.getElementById("gamerName")
const compuPPT = document.getElementById("compuPPT")
const mostrarR = document.getElementById("mostrarResultado")
//let result;
const piedraImg = document.getElementById("rock");
const papelImg = document.getElementById("paper")
const tijerasImg = document.getElementById("scissors");
const jugarPlay = document.getElementById("play");

function IngresarNombre() {
  
  IngresarName.addEventListener("click", () => {
    const gamer1 = window.prompt("Ingrese Nickname");
    gamer = gamer1.trim();
    if (gamer.length > 15) {
      window.alert("ingrese un nombre más corto");
    } else if (gamer === "" || gamer === " ") {
      window.alert("Intente nuevamente");
    } else {
      const inicio = document.getElementById("inicio");
      inicio.style.display = "block";
      const userNick = document.getElementById("showGamer")
      userNick.innerHTML = `Gamer: ${gamer.trim()}`;
      IngresarName.disabled = true;
    }
  });
}
IngresarNombre();

  piedraImg.addEventListener("click", () => {
    jugar("piedra");
 const limpiar = document.getElementById("JugarNuevamente")
  limpiar.style.display = "block";
  piedraImg.style.pointerEvents = "none"
});


papelImg.addEventListener("click", () => {
  jugar("papel");
  const limpiar = document.getElementById("JugarNuevamente")
  limpiar.style.display = "block";
  papelImg.style.pointerEvents = "none"
});

tijerasImg.addEventListener("click", () => {
  jugar("tijeras");
  const limpiar = document.getElementById("JugarNuevamente")
  limpiar.style.display = "block";
  tijerasImg.style.pointerEvents = "none"
  
});

function play() {
  
  jugarPlay.addEventListener("click", () => {
      document.getElementById("game").style.display = "flex";
      piedraImg.style.display = "flex"
   
   papelImg.style.display = "flex";
    const scissors = document.getElementById("scissors")
    scissors.style.display = "flex"; 
    jugarPlay.disabled = true; //ver aca
   
  });
}

play();

function comparar(user, computadora) {
  if (user === computadora) {
    return "¡Empate! Vuelve a jugar...";
  }
  if (
    (user === "piedra" && computadora === "tijeras") ||
    (user === "papel" && computadora === "piedra") ||
    (user === "tijeras" && computadora === "tijeras")
  ) {
    return "¡Ganaste!";
  }
  return "¡Gana la computadora!";
}

let contadorPC = 0;
let contadorUser = 0;
const maximoGanados = 3;
let userElect = "";
function jugar(eleccion) {
  userElect = eleccion;
  const elecciones = ["piedra", "papel", "tijeras"];
  const botE = Math.floor(Math.random() * 3);
  compuElect = elecciones[botE];
  gamerEleccion.innerHTML = gamer +": " + userElect;
  compuPPT.innerHTML = "PC: " + compuElect;
  const result = comparar(userElect, compuElect);
  mostrarR.innerHTML = result;


  if (userElect === "piedra") {
    papelImg.style.display = "none";
    tijerasImg.style.display = "none";
  } else if (userElect === "papel") {
    piedraImg.style.display = "none";
    tijerasImg.style.display = "none";
  } else {
    papelImg.style.display = "none";
    piedraImg.style.display = "none";
  }
  if (result === "¡Ganaste!") {
    contadorUser++;
    if (contadorUser === maximoGanados) {
      document.getElementById("scoreUser").innerHTML = contadorUser;
      document.getElementById("JugarNuevamente").disabled = true;
      document.getElementById("recargar").style.display = "block";
      window.alert("¡Ganaste al mejor de 5!");
      resetJuego();
      jugarPlay.disabled = true;
      IngresarNombre();
      
    } else {
      document.getElementById("scoreUser").innerHTML = contadorUser;
      console.log(contadorUser);
    }
  } else if (result === "¡Gana la computadora!") {
    contadorPC++;
    if (contadorPC === maximoGanados) {
      document.getElementById("scorePC").innerHTML = contadorPC;
      jugarPlay.disabled = true;
      document.getElementById("JugarNuevamente").disabled = true;
      document.getElementById("recargar").style.display = "block";

      window.alert("¡Computadora gana al mejor de 5!");
      resetJuego();
      jugarPlay.disabled = true;
      IngresarNombre();
      
    } else {
      document.getElementById("scorePC").innerHTML = contadorPC;
    }
  } else {
    contadorPC;
    contadorUser;
  }
}

function resetJuego() {
  jugarPlay.disabled = false;
  piedraImg.style.display = "flex";
  papelImg.style.display = "flex";
  tijerasImg.style.display = "flex";
  IngresarName.disabled = true;
  document.getElementById("JugarNuevamente").style.display = "none";
  piedraImg.style.backgroundColor = "black";
  papelImg.style.backgroundColor = "black";
  tijerasImg.style.backgroundColor = "black";
  mostrarR.innerHTML = "";
  compuPPT.innerHTML = "";
  gamerEleccion.innerHTML = "";
  IngresarName.style.display = "none";
  document.getElementById("game").style.display = "none";
  piedraImg.style.pointerEvents = "all"
  papelImg.style.pointerEvents = "all"
  tijerasImg.style.pointerEvents = "all"
}
document
  .getElementById("JugarNuevamente")
  .addEventListener("click", resetJuego);
document.getElementById("recargar").style.display = "none";

document.getElementById("recargar").onclick = function actualizar() {
  location.reload(true);
};
