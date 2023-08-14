
        

document.getElementById('calcular').onclick = function() {
    var eleccion = document.getElementById("select");
    var operacion = eleccion.options[eleccion.selectedIndex].value;

    var op1 = document.getElementById("operando1").value;
    var op2 = document.getElementById("operando2").value;
    
    var sumando1 = parseFloat(op1)
    var sumando2 = parseFloat(op2)
    var resultado;
    var res;

   if(isNaN(op1) || isNaN(op2)){
    
            return window.alert("Por favor, ingrese solo números ☠️")
        
        }
        else if(op1 === "" || op2 === "" || op1 === " " || op2 === " "){
            return window.alert("Por favor, debe ingresar números en ambos campos ☠️")
        }
    
    if(operacion === "suma"){
        
       res = sumando1 + sumando2
       var resultado = res.toString()
       
       if(resultado.length <= 10){
        resultado
       }
       else{
       return window.alert("El resultado tiene más de diez cifras ☠️")
       }

       
    }
    else if (operacion === "resta"){
       
        res = sumando1 - sumando2
        var resultado = res.toString()
       
        if(resultado.length <= 10){
         resultado
        }
        else{
        return window.alert("El resultado tiene más de diez cifras ☠️")
        }

    }
    else if(operacion === "multiplicacion"){
        
        res = sumando1 * sumando2
        var resultado = res.toString()
       
        if(resultado.length <= 10){
         resultado
        }
        else{
        return window.alert("El resultado tiene más de diez cifras ☠️")
        }

    }
    else if(operacion === "division" && sumando2 === 0 ){
        return window.alert("La operación no es válida ☠️")
        
    }
    else if(operacion === "division"){
        res = sumando1 / sumando2
        var resultado = res.toString()
       
        if(resultado.length <= 10){
         resultado
        }
        else{
        return  window.alert("El resultado tiene más de veinte dígitos ☠️")
        }
        
    }
   
    else{
        return  window.alert("Elija una operación")

    }
    return document.getElementById("mostrar").innerHTML = "RESULTADO: " + resultado
    
}


document.getElementById("recargar").onclick = function actualizar(){
    location.reload(true)
  }

