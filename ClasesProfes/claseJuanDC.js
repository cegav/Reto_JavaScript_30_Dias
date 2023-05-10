//En la clase del profe JuanDc el profe hablo de los siguientes temas:
/*
-Declaración e inicialización de variables
-Casteo o coercion  explicito o implicito
-Explico lo del tipado dinamico y tipado fuerte
-Ciclos
-Funciones que sirven para: Abstracción, Encapsulación, Organización y Reutilización
-HOSTING
*/

function declararEInicializar() {
  let variable1 = "valor1"; //Declaración e inicialización
  variable1 = "valor2"; //Reinicialización

  return variable1;
}

function Cast() {
  const n1 = 25;
  const n2 = 30;

  //Se utiliza template String para sumar las dos variables y castear a String
  const password = `${n1 + n2}`;

  return password;
}

function mientras() {
  let numerito = 0;

  while (numerito <= 10) {
    console.log("Mensaje " + numerito);
    numerito += 1;
  }
}

function hoisting() {
  console.log("Esto es var " + benito);
  var benito = "Camelo";

  console.log("Esto es const" + benito2);
  const benito2 = "Camelo";
}
