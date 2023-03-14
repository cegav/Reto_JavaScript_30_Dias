

//Declaración e inicialización de una variable

//Variable puede ser con var y con let

var velocidad = 100;
let peso = 30;

//declarar
let altura;

altura = 20;
console.log(altura);

const nombre = "";

//Funciones
//Ejemplo función que devuelve un valor con la palabra reservada return

function suma(a, b) {
    resultado = a + b;
    console.log(resultado);
}

suma(2,5);

//Función IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. 

(function () {
    console.log("Soy una IIFE");
  })();

//Hay función de expresión una función que se define como una función y puede ser utilizada como una variable
//En este ejemplo le paso al parametro nombre el valor de Cesar

let saluda = function(nombre) {  
    console.log(`Hola ${nombre}`);
}

saluda('Cesar');

let saludito = (nombre) => { console.log(`Holita para ${nombre}`); }

saludito('Pepito');