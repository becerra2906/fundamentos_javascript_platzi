// estas eran las funciones que teniamos en la 
// clase pasada

///
///const MAYORIA_DE_EDAD = 18;
///
///function esMayorDeEdad(persona){
///    return persona.edad >= MAYORIA_DE_EDAD;
///}
///
///function imprimirSiEsMayorDeEdad(persona){
///    if (esMayorDeEdad(persona)){
///        console.log(`${persona.nombre} es mayor de edad`);
///    }
///    else {
///        console.log(`${persona.nombre} es menor de edad`);
///    }
///}
///



// hay varias formas en js en las que se pueden declarar funciones. La primera es
// declarando la funcion dentro de una variable. 


// you puedo dejar la función dentro de una variable poniendola como lo 
// hice con la variable esMayorDeEdad, donde la declaro como una variable
// y dentro defino la función 
// luego puedo invocarla como cualquier función. 

//const MAYORIA_DE_EDAD = 18;
//
//var esMayorDeEdad = function (persona){
//    return persona.edad >= MAYORIA_DE_EDAD;
//}
//
//function imprimirSiEsMayorDeEdad(persona){
//    if (esMayorDeEdad(persona)){
//        console.log(`${persona.nombre} es mayor de edad`);
//    }
//    else {
//        console.log(`${persona.nombre} es menor de edad`);
//    }
//}

// si yo ejecuto todo el código que tengo arriba, la función
// imprimirSiEsMayorDeEdad va a usar la función contenida en la variable esMayorDeEdad
// y a correr correctamente si hubiera un objeto que le pasara el párametro.

// esto también hace que la función sea anonima y se llame cuando se llame a la variable

// cuando se definen las funciones dentro de variables, es mejor dejarlas como constantes (const) 
// para evitar que luego se puedan cambiar dentro del desarrollo del script. 

// que es un arrow function?

// => es el símbolo para funciones
// este se poone después de definir el nombre de la función usando el nombre de la variable, 
//seguido de los parametros que va a recibir y luego si usando el => para significar el inicio del
// cuerpo de la función como pueden ver en la función esMayorDeEdad

//const MAYORIA_DE_EDAD = 18;
//
//var esMayorDeEdad = (persona) =>{
//    return persona.edad >= MAYORIA_DE_EDAD;
//}
//
//function imprimirSiEsMayorDeEdad(persona){
//    if (esMayorDeEdad(persona)){
//        console.log(`${persona.nombre} es mayor de edad`);
//    }
//    else {
//        console.log(`${persona.nombre} es menor de edad`);
//    }
//}

// cuando la función solo tiene un párametro, los párentesis se pueden obviar (para ahorrar caracteres)

///const MAYORIA_DE_EDAD = 18;
///
///var esMayorDeEdad = persona =>{
///    return persona.edad >= MAYORIA_DE_EDAD;
///}
///
///function imprimirSiEsMayorDeEdad(persona){
///    if (esMayorDeEdad(persona)){
///        console.log(`${persona.nombre} es mayor de edad`);
///    }
///    else {
///        console.log(`${persona.nombre} es menor de edad`);
///    }
///}


// asimismo, cuando una función solo retorna algo, se puede obviar el return dentro del cuerpo de la función 
// y las llaves que lo delimitan
// la función de todos modos va a retornar el valor que salga de la misma
// esto permite que la función en vez de ser 3 líneas de código, sea solo una

///const MAYORIA_DE_EDAD = 18;
///
///var esMayorDeEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD;
///
///
///function imprimirSiEsMayorDeEdad(persona){
///    if (esMayorDeEdad(persona)){
///        console.log(`${persona.nombre} es mayor de edad`);
///    }
///    else {
///        console.log(`${persona.nombre} es menor de edad`);
///    }
///}

// también se puede desestructurar el párametro. usando ({}) y el código de todos modos entiende que 
// la función va a recibir un objeto del cual debe usar el valor que tenga la llave , en este caso la edad.
///
const MAYORIA_DE_EDAD = 18;

var esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }
}


function permitirAcceso(persona){
    if (!esMayorDeEdad){
        console.log("ACCESO DENEGADO")
  }
}

const ES_MENOR_DE_EDAD = (persona) =>{
    if (!esMayorDeEdad)
    {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

//EJERCICIO DE CLASE: ESCRIBIR LA FUNCION ES MENOR DE EDAD COMO ARROW FUNCTION LLAMANDO A ES MAYOR DE EDAD