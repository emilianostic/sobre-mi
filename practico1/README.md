# Calculadora Simple

Calculadora con operaciones básicas (suma, resta, multiplicación y división) utilizando HTML, CSS y Javascript.

## Comenzando 

Los archivos de este proyecto se pueden descargar de  https://github.com/emilianostic/sobre-mi/tree/master/practico1




### Calcular 🔧

Una vez que ingresamos al sitio de la calculadora podremos elegir (de un select) la operación a realizar (suma, resta, multiplicación o división). La interfaz también tiene dos inputs (con sus placeholders, respectivos) uno a la derecha y otro a la izquierda del selecct donde se pueden insertar caracteres. Luego se hace click el botón de igual (=) para obtener el resultado. Estas son las posibilidades al hacer click sobre el "=":

* Si no se selecciona una operación y no se coloca ningun dato numérico obtendremos una ventana de alerta que pedirá que seleccionemos una operación.

* Si ingresamos caracteres que no son números (decimales o enteros) en uno o en ambos espacios, se obtiene una ventana de alerta que pide que ingrese solo números. Independientemente que seleccionemos o no una operación.

* Seleccionando una operación, si no se  ingresan datos numéricos o ingresando un dato en un solo  input dará una vetana de alerta indicando que deberá ingresar datos en ambos campos si es un número y si no es un número alertará que debemos ingresar solo números.


* Con un número en cada input y eligiendo una operación se verá en la parte superior de la calculadora (elemento div) el resultado, excepto que:

    * Suma (+), Resta (-) y Multiplicación (*): si el resultado es mayor a 10 cifras dará la alerta de ello y no mostrará el resultado.
    * División: Si el resultado es mayor a 10 cifras dará la alerta de ello y no mostrará el resultado. Además si el divisor (imput a la derecha del select) es cero (0) habrá una alerta; "la operación no es válida".

* El botón con el símbolo de recarga permite borrar los datos ingresados y el resultado obtenido pare volver a operar con la calculadora simple.



## Ejecutando pruebas ⚙️

input1: 9999999999
input2: 1
select: + (suma)
window alerta: El resultado tiene más de diez cifras.



## Construido con 🛠️


* [CDNFonts](https://fonts.cdnfonts.com/) - red de distribución de contenidos. Fuente utilizada para el div "Resultado"
* [Google Fonts](https://fonts.googleapis.com ) - Símbolo de "=" 


## Autores ✒️

* **Emiliano Velázquez** 

---
⌨️ con ❤️ por [@emilianostic](https://github.com/emilianostic/sobre-mi/) 😊
