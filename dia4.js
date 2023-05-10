

//Array: Los array son un tipo de objeto que permite almacenar una colección de Valores

let colores = ['rojo', 'verde', 'azul'];

colores.push('negro');
colores.push('blanco');

console.log(colores);

colores.pop();

console.log(colores);

//Metodo map() permite aplicar una función a cada elemento del array y devolver un nuevo array con los valores modificados

const numeros = [1, 2, 3, 4, 5]
const cuadrados = numeros.map(function(numero) {
    return numero * numero
});

console.log(cuadrados);

//Metodo reduce() permite combinar todos los elementos del array en un solo valor
/* En el método reduce(), el segundo argumento es el valor inicial del acumulador (en este caso es 0). */
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(suma);
