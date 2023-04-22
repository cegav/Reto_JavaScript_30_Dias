//Operadores Aritmeticos. Permiten realizar operaciones básica

// Suma
console.log(1 + 2); // 3

// Resta
console.log(5 - 2); // 3

// Multiplicación
console.log(3 * 4); // 12

// División
console.log(10 / 2); // 5

// Módulo (devuelve el resto de una división)
console.log(10 % 3); // 1

//Operadores de asignación permite asignar valores a variables.
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

//Operadores de comparación
console.log(1 < 2); // true
console.log(2 > 1); // true
console.log(1 <= 2); // true
console.log(2 >= 1); // true
console.log(1 !== 2); // true

//Existes dos tipos para el operador de igualdad,
/*
    El primero realiza una comparación de valor y el segundo 
    además del valor verfica el tipo de Dato. 
*/

console.log(1 == "1"); // true
console.log(1 === "1"); // false

/*
Operadores Lógicos
AND -> Si ambas expresiones son verdaderas devuelve true, de lo contrario devuelve false
OR -> Si al menos una expresión es verdadera, devuelve true, si las dos son falsas devuelve false
*/
let edad = 25;
let mayorEdad = edad >= 18;

if (edad >= 18 && mayorEdad) {
  console.log("Eres mayor de edad");
} else {
  console.log("Aún eres menor de edad");
}

let tieneIdentificacion = true;

if (edad >= 18 && tieneIdentificacion) {
  console.log("Puedes entrar al Bar");
} else {
  console.log("No tienes la edad o la identificación para entrar al bar");
}

/*
NOT (!): Este operador lógico invierte el valor de la expresión. 
Si la expresión es verdadera, devuelve false, de lo contrario, devuelve true. 
*/

let esCaroElProducto = true;

if(!esCaroElProducto) {
    console.log("No es caro el producto");
}else {
    console.log("Es caro");
}

//Scope(alcance) hay dos tipos Global y Local.

function suma(a,b) {
    var resultadoSuma = a + b;
    return resultadoSuma;
}

function resultadoPorDos() {
    let operacion = resultadoSuma * 2
    return operacion;
}

suma(2,3);
resultadoPorDos();