
var alejandro = {
    nombre: "Alejandro",
    apellido: "Becerra",
    edad :25
}

 // Otra forma de hacer esto es llamando el atributo dentro de la variable
 // que se va a usar para llamarlo dentro de la función. Por ejemplo en vez de poner
 // var nombre = alejandro.nombre
 // se pone var {nombre} = alejandro
 // de esta forma la función sabe que va a llamar el nombre de la variable alejandro. 

///function imprimirNombreEnMayus (persona){
///    var {nombre} = alejandro;
///    console.log(nombre).toUpperCase();
///}
///
///
///imprimirNombreEnMayus(alejandro);


// reto imprimir nombre y edad, imprimiendo "Hola me llamo Alejandro y tengo 28 años";
// usando un objeto del que se saque la información que poble la función


var usuario = {
    nombre: "Alejandro",
    edad : 25
};

function imprimirNombreYEdad (usuario){
   var {nombre} = usuario;
   var {edad} = usuario; 
    console.log (`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(usuario);