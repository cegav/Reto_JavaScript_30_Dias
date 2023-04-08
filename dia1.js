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

suma(2, 5);

//Función IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida.

(function () {
  console.log("Soy una IIFE");
})();

//Hay función de expresión una función que se define como una función y puede ser utilizada como una variable
//En este ejemplo le paso al parametro nombre el valor de Cesar

let saluda = function (nombre) {
  console.log(`Hola ${nombre}`);
};

saluda("Cesar");

//Array FUNCTION

let saludito = (nombre) => {
  console.log(`Holita para ${nombre}`);
};

saludito("Pepito");

//Tipo de datos numericos

let edad = 15;
let salario = 1000000;
const pi = 3.14;

//Se puede utilizar la notación cientifica para representar números muy grandes o muy pequeños

const numeroGrande = 1e6; //esto significa el 1 con 6 ceros ->1000000
const numeroPequeño = 1e-6; //esto significa el 1 con - 6 ceros -> 0.000001

console.log(numeroGrande);
console.log(numeroPequeño);

//Concatenación

const nombrecito = "Benito";
const apellidito = "Camelo";

//Concatenar usando el operador +
console.log("Mi nombre es " + nombrecito + " y mi apellido es " + apellidito);

//Concatenar usando Template String
console.log(`Mi nombre es ${nombrecito} y mi apellido es ${apellidito}`);

//Metodos para manipular strings
/*
length: Devuelve la longitud de un string.
toUpperCase(): Devuelve el string en mayúsculas.
toLowerCase(): Devuelve el string en minúsculas.
substring(): Devuelve una parte del string.
*/

const string = "Liverpool";

console.log(string.length); //Devuelve el tamaño del String
console.log(string.toUpperCase());
console.log(string.toLocaleLowerCase());
console.log(string.substring(0, 5));

//Variables tipo Object

const persona = {
  nombre: "Rosa",
  apellido: "Perez",
  ranked: 150,
  habilidadFavorita: null,
  cursoFavorito: {
    nombre: "Estructura de datos",
    clases: 50,
    duracion: "2 horas",
  },
};

//Forma de acceder a las propiedades de un Objeto por operador . o notación de corchetes []
console.log(persona);
console.log(persona.apellido);
console.log(persona.cursoFavorito);
console.log(persona.cursoFavorito.duracion);
console.log(persona["ranked"]);

//Valores Booleanos
let cursoCompletado = true;
let videoCompletado = false;

console.log(cursoCompletado);
console.log(videoCompletado);

if (cursoCompletado && videoCompletado) {
  console.log("PASO CURSO");
} else if (cursoCompletado || videoCompletado) {
  console.log("NO PASO CURSO");
}

//El operador ternario una forma abreviada de escribir una sentencia if/else

//condicion ? valor es verdadero imprime esto : si el valor es falso imprime esto

let mensaje =
  cursoCompletado || videoCompletado ? "PASO CURSO" : "NO PASO CURSO";
console.log(mensaje);

//Si no recuedas el tipo de dato con que estás trabajando utiliza typeof
console.log(typeof persona);
console.log(typeof persona.ranked);
console.log(typeof string);

//Symbol los simbolos son un tipo de datos que se utiliza para identificadores únicos.

const simbolo = Symbol();

const gato = {
  nombre: "sissy",
  edad: 5,
  [simbolo]: 1,
};

console.log(gato[simbolo]);

/*BigInt: El tipo de dato BigInt se introdujo en ECMAScript 2020 y 
se utiliza para representar números enteros de tamaño arbitrario. 
BigInt es necesario cuando se trabaja con números enteros extremadamente grandes*/

const entero1 = 9007199254740991n; // declaración Bigint con 'n'
const entero2 = BigInt("9007199254740992"); // declaración Bigint con 'función'

console.log(typeof entero1); // "bigint"
console.log(typeof entero2); // "bigint"

const suma = entero1 + entero2;
console.log(suma); // 18014398509481983n
