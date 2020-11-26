var edad = 25;

var edad = edad + 1;

edad +=1;

var peso = 68;

peso = peso - 2

peso -= 2;

var sandwhich = 1;

jugar_al_fubotl  = 3

peso = peso + sandwhich;

peso -= jugar_al_fubotl;

 var precio_vino = 200.3;

var total = precio_vino *4;

var pizza = 12;
var personas = 9;

var porciones = pizza / personas;

// a una variable numérica se le puede
// adicionar a su valor usando i = i + 1
// o usando i +=1;  (este último no requiere que lo pongamos dentro de la variable porque
// ahi la estamos llamando ésta ya estando declarada y asignada)
// estos métodos se pueden usar también para restarle al valor

// también se pueden operar los números que contengan varias variables con los operadores
// aritmeticos normales. y  utilizando los mismos métodos -= +=

// las operaciones aritmeticas también sirven para los flotas. Ahora bien 
// sirve utilizar la función del módulo Math Math.round() para redondear los resultados de 
// operaciones con floats porque js no es tan bueno guardando los decimales
// toFixed(x) define x numero de decimales a tener en cuenta después del punto cuando se convierte el float
// en un string

// parseFloat(variable), permite convertir un string en un float.

console.log(edad);
console.log(peso);
console.log(Math.round(total));
console.log(porciones);