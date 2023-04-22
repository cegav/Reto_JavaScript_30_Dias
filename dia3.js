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
