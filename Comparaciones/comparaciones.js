var x = 4;
var y = '4';

var comp = x === y;

var comp2 = x ==y; 

console.log (comp);
console.log(comp2);


// en js la comparacion se hace con doble = (==) o triple = (===) ya que el = solo, sirve para asignar un valor a una variable (tal como pasa en python);

// comparacion de objetos  

var sacha = {
   nombre: 'Sacha'
}


var otraPersona = {
   nombre: 'Sacha'
}

var compObj = sacha == otraPersona;

console.log(compObj);

// para que la comparacion entre objetos de igual, tienes que asignar el segundo objeto a la variable que contiene el primer objeto (does not make much sense tbh pero espero que tenga sentido pronto).

// ya tiene sentido. En Js los objetos no pueden compararse porque para que sean iguales, tienen que ser dos variables que representen el mismo objeto. Ese es el unico caso en el que van a ser iguales y las comparaciones responderan "true".