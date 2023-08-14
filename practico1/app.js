//evento onclick al botón "calcular" que toma los valores de de acuerdo a la elección y los coloca en la var operación
document.getElementById("calcular").onclick = function () {
  var eleccion = document.getElementById("select");
  var operacion = eleccion.options[eleccion.selectedIndex].value;
  //se almacenan los valores ingresados a cada input en variables diferentes
  var op1 = document.getElementById("operando1").value;
  var op2 = document.getElementById("operando2").value;

  //se coloca la función parseFloat para que permita numeros decimales
  var primerNumero = parseFloat(op1);
  var segundoNumero = parseFloat(op2);
  var resultado;
  var res;
  //se descartan los valores que no sean números
  if (isNaN(op1) || isNaN(op2)) {
    return window.alert("Por favor, ingrese solo números ☠️");
  } else if (op1 === "" || op2 === "" || op1 === " " || op2 === " ") {
    return window.alert("Por favor, debe ingresar números en ambos campos ☠️");
  }

  if (operacion === "suma") {
    res = primerNumero + segundoNumero;
    //se alamacena en una variable resultado al valor obtenido de pasar la variable res a string para luego utilizar el
    //.length para restringir la cantidad de cifras del resultado a 10
    var resultado = res.toString();

    if (resultado.length <= 10) {
      resultado;
    } else {
      return window.alert("El resultado tiene más de diez cifras ☠️");
    }
  } else if (operacion === "resta") {
    res = primerNumero - segundoNumero;
    var resultado = res.toString();

    if (resultado.length <= 10) {
      resultado;
    } else {
      return window.alert("El resultado tiene más de diez cifras ☠️");
    }
  } else if (operacion === "multiplicacion") {
    res = primerNumero * segundoNumero;
    var resultado = res.toString();

    if (resultado.length <= 10) {
      resultado;
    } else {
      return window.alert("El resultado tiene más de diez cifras ☠️");
    }
  }
  //si el valor ingresado en el input de la derecha (dividendo) es 0 no es válida la operación
  else if (operacion === "division" && segundoNumero === 0) {
    return window.alert("La operación no es válida ☠️");
  } else if (operacion === "division") {
    res = primerNumero / segundoNumero;
    var resultado = res.toString();

    if (resultado.length <= 10) {
      resultado;
    } else {
      return window.alert("El resultado tiene más de veinte dígitos ☠️");
    }
  }
  //si no se elije una operación en el select también habrá un mensaje de error
  else {
    return window.alert("Elija una operación");
  }
  return (document.getElementById("mostrar").innerHTML =
    "RESULTADO: " + resultado);
};

//para borrar los daros ingresados, el resultado obtenido y la operación seleccionada hay un botón "recargar" para actualizar
//la página
document.getElementById("recargar").onclick = function actualizar() {
  location.reload(true);
};
