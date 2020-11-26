var nombre;
var apellido;

nombre = "Alejandro";
apellido = "Becerra"; 
var nombreenmayus = nombre.toUpperCase();

var nombreenminus = nombre.toLowerCase();

var primera_letra = nombre.charAt(0);

var longitud_nombre = nombre.length;

var nombre_completo = nombre + " " +apellido;

var segunda_tercera_nom = nombre.substr(1,4);

var nombre_completo2;
 
nombre_completo2 = `${nombreenminus.toUpperCase()} ${apellido}`; 

var desafio = nombre.charAt(nombre.length -1);

// toUpperCase pone en mayuscula todo el contenido
// del string.
// toLowerCase pone en minuscula todo el contenido
// del string.

// charAt() nos permite encontrar un caracter en el
// una posición del string. La posición se tiene que
// poner como parametro que recibe la función
// iniciando en 0 porque es la primera posición

// .length permite saber la longitud de caracteres 
// de un string, un array y un objeto.

// los strings se concatenan con el símbolo +

//interpolación de texto: usando comillas invertidas
// y poniendo el signo $ y unas llaves, se puede poner 
// código js dentro de un texto que estemos componiendo, de
// esta forma permitiendonos llamar variables dentro del mismo
// o invocar funciones que ya tengamos definidas:  `${nombre}  ${apellido}`
// resultaria en `Alejandro Becerra`  

// substr nos permite acceder a una porción de un string
// se pone el nombre de la variable.substr(la posición inicial, cuantos caracteres quiero acceder)
// por ejemplo nombre.substr(1,3);


console.log(nombreenmayus);
console.log(nombreenminus);
console.log(primera_letra);
console.log(longitud_nombre); 
console.log(nombre_completo);
console.log(nombre_completo2);
console.log(segunda_tercera_nom)    

console.log(desafio);