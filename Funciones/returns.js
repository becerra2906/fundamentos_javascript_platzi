// para las funciones que no van a imprimir informacion en consola, es mejor usar el atributo return para retornar valores que se generan dentro de una funcion y que luego en caso de ser necesario, pueden ser impresos.  


var persona = {
   nombre: 'alejandro',
   apellido: 'becerra',
   edad : 18
}

// para hacer las funciones mas flexibles puedo usar un magic number (una variable que me permite usar la funcion con un numero diferente que se use a la hora de comparar e iterar)

var mayoria = 21

// function printIfAdult (persona){
//   if (persona.edad < 18){
//      return (`${persona.nombre} es menor de edad`)}
//   else {return(`${persona.nombre} es mayor de edad`)}
//
//   }  


function printIfAdult(persona, mayoria){
   if (persona.edad < mayoria){
      return (`${persona.nombre} es menor de edad`)}
   else {return(`${persona.nombre} es mayor de edad`)}

   }  


console.log(printIfAdult(persona,mayoria));