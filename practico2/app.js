//Declaración de variables
let gamer = "";
const IngresarName = document.getElementById("ingresar")
const cuadros = document.getElementById("game")
const inicio = document.getElementById("inicio");
const gamerEleccion = document.getElementById("gamerName")
const compuPPT = document.getElementById("compuPPT")
const mostrarR = document.getElementById("mostrarResultado")
const limpiar = document.getElementById("JugarNuevamente")
const piedraImg = document.getElementById("rock");
const papelImg = document.getElementById("paper")
const tijerasImg = document.getElementById("scissors");
const jugarPlay = document.getElementById("play");
const reload = document.getElementById("recargar");

//función para ingresar el nombre, no mas de 15 caracteres...
//luego de esta función se visualizará el nombre del jugador y
//el botón para ver las opciones de Piedra, Papel o Tijeras (PPT)
function IngresarNombre() {
  
  IngresarName.addEventListener("click", () => {
    const gamer1 = window.prompt("Ingrese Nickname");
    gamer = gamer1.trim();
    if (gamer.length > 15) {
      window.alert("ingrese un nombre más corto");
    } else if (gamer === "" || gamer === " ") {
      window.alert("Intente nuevamente");
    } else {
     
      document.getElementById("name").style.visibility = "visible";
      jugarPlay.style.visibility = "visible"
      const userNick = document.getElementById("showGamer")
      userNick.innerHTML = `Gamer: ${gamer.trim()}`;
      userNick.style.visibility = "visible"
      userNick.style.flexDirection = "column"
      IngresarName.style.visibility = "hidden";
      document.getElementById("scoreUser").innerHTML = gamer + ": " + "0"

    }
  });
}
IngresarNombre();

//permite que se desplieguen las opciones PPT y se desactivan para que 
//no se puedan pedir repetidas veces
function play() {
  
  jugarPlay.addEventListener("click", () => {
      cuadros.style.display = "flex";
      piedraImg.style.display = "flex"
     papelImg.style.display = "flex";
     tijerasImg.style.display = "flex" 
     jugarPlay.disabled = true; 
   
  });
}

play();

//comparamos la elección del usuario con la de la computadora
function comparar(user, computadora) {
  if (user === computadora) {
    return "¡Empate! Vuelve a jugar...";
  }
  if (
    (user === "piedra" && computadora === "tijeras") ||
    (user === "papel" && computadora === "piedra") ||
    (user === "tijeras" && computadora === "papel")
  ) {
    return "¡Ganaste!";
  }
  return "¡Gana la computadora!";
}
// función que se llmará en el juego con el botón limpiar para que aparezcan las opciones
function resetJuego() {
  jugarPlay.disabled = false;
  piedraImg.style.display = "flex";
  papelImg.style.display = "flex";
  tijerasImg.style.display = "flex";
  IngresarName.disabled = true;
  limpiar.style.display = "none";
  mostrarR.innerHTML = "";
  compuPPT.innerHTML = "";
  gamerEleccion.innerHTML = "";
  IngresarName.style.display = "none";
  cuadros.style.display = "none";
  piedraImg.style.pointerEvents = "all"
  papelImg.style.pointerEvents = "all"
  tijerasImg.style.pointerEvents = "all"
}
limpiar.addEventListener("click", resetJuego);
reload.style.display = "none";

//creamos contadores de las jugadas ganadas por el aleatorio
//y por el usuario estableciendo un máximo de 3 para que se al mejor
//de 5 partidas
let contadorPC = 0;
let contadorUser = 0;
const maximoGanados = 3;
let userElect = "";

//se juega d eacuerdo a la eleccón del usuario y la aleatoria
//se van mostrando las jugadas individuales .  Si hay empates no se cuentan en el marcador. Al llegar a
//3 ganados por cualquiera de los dos se da una alerta de ello, respectivamente
//se activan las ocpiones cada vez que se "limpia" con un reset para jugar nuevamente
function jugar(eleccion) {
  userElect = eleccion;
  const elecciones = ["piedra", "papel", "tijeras"];
  const botE = Math.floor(Math.random() * 3);
  compuElect = elecciones[botE];
  gamerEleccion.innerHTML = gamer +": " + userElect;
  compuPPT.innerHTML = "Computadora: " + compuElect;
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
      document.getElementById("scoreUser").innerHTML = gamer + ": " + contadorUser;
      window.alert("¡Ganaste al mejor de 5!");
      reload.style.display = "flex";
      reload.style.alignItems = "center"
       inicio.style.display = "none"
      resetJuego();
      limpiar.style.visibility = "hidden"
      jugarPlay.style.display = "none"
      
     
      
    } else {
      document.getElementById("scoreUser").innerHTML = gamer + ": " + contadorUser;
      console.log(contadorUser);
    }
  } else if (result === "¡Gana la computadora!") {
    contadorPC++;
    if (contadorPC === maximoGanados) {
      
      
      document.getElementById("scorePC").innerHTML = "Computadora: "+ contadorPC;
      window.alert("¡Computadora gana al mejor de 5!");
      reload.style.display = "flex";
      reload.style.alignItems = "center"
       inicio.style.display = "none"
      resetJuego();
      limpiar.style.visibility = "hidden"
      jugarPlay.style.display = "none"
      
      
    } else {
      document.getElementById("scorePC").innerHTML = "Computadora: "+ contadorPC;
    }
  } else {
    contadorPC;
    contadorUser;
  }
}

//funciones para cada elección que toman la función jugar
//Al elegir una opción PPT el usuario, las otras opciones desaparecen y se muestra el marcador con los
//resultados
piedraImg.addEventListener("click", () => {
  jugar("piedra");
limpiar.style.display = "flex";
  piedraImg.style.pointerEvents = "none"
document.getElementById("marcador").style.display = "flex"
document.getElementById("scorePC").style.display = "flex"
document.getElementById("scoreUser").style.display = "flex"
document.getElementById("finalResult").style.display = "flex"

});


papelImg.addEventListener("click", () => {
  jugar("papel");
  limpiar.style.display = "flex";
  papelImg.style.pointerEvents = "none"
 
 document.getElementById("marcador").style.display = "flex"
  document.getElementById("scorePC").style.display = "flex"
  document.getElementById("scoreUser").style.display = "flex"
  document.getElementById("finalResult").style.display = "flex"
  

});

tijerasImg.addEventListener("click", () => {
  jugar("tijeras");
  limpiar.style.display = "flex";
  tijerasImg.style.pointerEvents = "none"
 
  document.getElementById("marcador").style.display = "flex"
  document.getElementById("scorePC").style.display = "flex"
  document.getElementById("scoreUser").style.display = "flex"
  document.getElementById("finalResult").style.display = "flex"
  
});

//función para comenzar una nueva partida, recarga la página

document.getElementById("recargar").onclick = function actualizar() {
  location.reload(true);
};
