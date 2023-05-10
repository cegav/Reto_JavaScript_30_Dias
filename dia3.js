//Estructura de control if

let edad = 25;
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//else if para utilizar varias condiciones if

let calificacion = 3;

if (calificacion == 5) {
  console.log("Pasaste, Sacaste la nota más alta");
} else if (calificacion >= 3 && calificacion <= 4) {
  console.log("Pasaste");
} else {
  console.log("No pasaste");
}

//si un año es bisciesto

function isLeapYear(year) {
  let esDivisibleCien = year % 100;
  let esDivisibleCuatro = year % 4;
  let esDivisibleCuatrocientos = year % 400;
  let anoEsMayor = year > 0;

  if (esDivisibleCuatro == 0 && !esDivisibleCien == 0 && anoEsMayor) {
    console.log(true);
  } else if (
    esDivisibleCuatrocientos == 0 &&
    esDivisibleCien == 0 &&
    anoEsMayor
  ) {
    console.log(false);
  } else {
    console.log(false);
  }
}

isLeapYear(2000);

//Estructura Switch

const dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("Hoy no es lunes, martes o miércoles");
}


let numero = "12";
switch (true) {
  case numero > 100:
    console.log("El valor es mayor a 100");
    break;
  case numero % 2 === 0:
    console.log("El valor es multiplo de 2");
    break;
  default:
    console.log("El valor no cumple con ninguna de las características");
}


//Ejercicio mascotas y años

function getPetExerciseInfo(type, age) {
    switch (true) { 
      case type == 'perro' && age < 1:
        console.log("Los cachorros necesitan pequeñas y frecuentes sesiones de juego");
        break;
      case type == 'perro' && age >= 1 && age <= 7:
        console.log("Los perros a esta edad necesitan caminatas diarias y sesiones de juego");
        break;
      case type == 'perro' && age > 7:
        return "Los perros viejos necesitan caminatas más cortas";
        break;
      case type == 'gato' && age < 1:
        return "Los gatitos necesitan frecuentes sesiones de juego";
        break;
      case type == 'gato' && age >= 1 && age <= 7:
        return "Los gatos a esta edad necesitan jugar diariamente";
        break;
      case type == 'gato' && age > 7:
        return "Los gatos viejos necesitan sesiones de juego más cortas";
        break;
      case type == 'ave' && age < 1:
        return "Las aves jóvenes necesitan mucho espacio para volar";
        break;
      case type == 'ave' && age >= 1 && age <= 7:
        return "Las aves necesitan jugar diariamente y un lugar para volar";
        break;
      case type == 'ave' && age > 7:
        return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
        break;
      default:
      return "Error de mascota o años"
    }
  };

  getPetExerciseInfo("perro", 3);


  //Solución estudiante
  function getPetExerciseInfo(type, age) {
    const animals = {
        perro: [
            "Los cachorros necesitan pequeñas y frecuentes sesiones de juego",
            "Los perros a esta edad necesitan caminatas diarias y sesiones de juego",
            "Los perros viejos necesitan caminatas más cortas",
        ],
        gato: [
            "Los gatitos necesitan frecuentes sesiones de juego",
            "Los gatos a esta edad necesitan jugar diariamente",
            "Los gatos viejos necesitan sesiones de juego más cortas",
        ],
        ave: [
            "Las aves jóvenes necesitan mucho espacio para volar",
            "Las aves necesitan jugar diariamente y un lugar para volar",
            "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar",
        ]
    }

    const messages = animals[type]
    if (!messages) return "Tipo de mascota inválida"

    let index = age < 1 ? 0 : age < 7 ? 1 : 2
    return messages[index]
}

//Ciclo for

for(let i = 0; i <= 10; i++) {
  console.log(i);
}


/*
los ciclos **for-in** y for-of. 
El ciclo for-in se utiliza para recorrer las propiedades de un objeto, 
mientras que el ciclo for-of se utiliza para recorrer los elementos de una colección como un array.
*/
//ejemplo for in
const user = {
  name: "Cesar",
  age: 25,
  role: "Frontend Developer",
};

for(const prop in user) {
  console.log(user[prop]);
}

//Ejemplo for of
const technologies = ["tablet", "Cellphone", "Computador"];

for (const elements of technologies) {
  console.log(elements);
}

let i = 1;

while(i <= 10) {
  console.log(i);
  i++;
}

i = 1;

do{
  console.log(i);
  i = i * 2;
}while(i<=10);




//Triangulo


let caracteres = [];
let triangulo;

for (let i = 0; i < size; i++) {
  caracteres[i] = caracter;
  //caracteres.push(caracter);
  //console.log(caracteres);
}

for (let i = size - 1; i >= 0; i--) {
  let resultado = "";
  for (let j = i; j < size; j++) {
    resultado += caracteres[j];
  }
  //triangulo = resultado.join(''); 
  console.log(resultado);
}

let altura = 5;
let patron = "*";

for (let i = altura; i >= 1; i--) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += patron;
  }
  console.log(fila);
}

let size = 6;
let caracter = "$"

function printTriangle(size, character) {
  let triangle = "";
  let characterNumber = 1;
  while(characterNumber <= size){
      for (let j = 0; j < size - characterNumber; j++) {
        triangle += " ";
      }
      for (let j = 0; j < characterNumber; j++) {
        triangle += character;
      }
    if (characterNumber < size) { triangle += `\n` };
    characterNumber++;
    }

    let imprimir = console.log(triangle);
  
  return imprimir;
}