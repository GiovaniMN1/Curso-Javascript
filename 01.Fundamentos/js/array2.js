//Conocer el tamaño del array
let country = ["Mexico", "España", "Canada", "Argentina", "Brasil", "Alemania"];
console.log(country.length)

//Conocer el ultimo item del array
console.log(country.length-1)

// push(): Agrega uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.
// javascript
var arr = [1, 2, 3];
arr.push(4); // arr ahora es [1, 2, 3, 4]

// pop(): Elimina el último elemento del arreglo y lo devuelve.
// javascript
var arr = [1, 2, 3];
var ultimoElemento = arr.pop(); // arr ahora es [1, 2], ultimoElemento es 3

// shift(): Elimina el primer elemento del arreglo y lo devuelve.
// javascript
var arr = [1, 2, 3];
var primerElemento = arr.shift(); // arr ahora es [2, 3], primerElemento es 1

// unshift(): Agrega uno o más elementos al principio del arreglo y devuelve la nueva longitud del arreglo.
// javascript
var arr = [2, 3];
arr.unshift(1); // arr ahora es [1, 2, 3]

// splice(): Permite agregar, eliminar o reemplazar elementos en un arreglo.
// javascript
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Elimina 1 elemento en la posición 2, arr ahora es [1, 2, 4, 5]

// slice(): Retorna una copia superficial de una porción de un arreglo en un nuevo arreglo.
// javascript
var arr = [1, 2, 3, 4, 5];
var nuevoArr = arr.slice(1, 3); // nuevoArr es [2, 3]

// forEach(): Ejecuta una función por cada elemento del arreglo.
// javascript
var arr = [1, 2, 3];
arr.forEach(function(elemento) {
    console.log(elemento); // Imprime 1, 2, 3
});