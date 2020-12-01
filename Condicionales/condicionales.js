// hay varias estructuras de contol. La primera que vamos a ver son los condicionales.

var persona = {
   nombre: 'Alejandro',
   apellido: 'Becerra',
   edad: 25,
   ingeniero: true,
   cocinero: false,
   cantante: false,
   dj: false,
   guitarrista: false,
   drone_pilot: true
}

var personaDos = {
   nombre: 'Valentina',
   apellido: 'Florez',
   edad: 22,
   ingeniero: false,
   cocinero: true,
   cantante: true,
   dj: false,
   guitarrista: false,
   drone_pilot: true
}

function imprimirProfesiones (persona){
   console.log(`${persona.nombre} es: `);
   if (persona.ingeniero === true){
      console.log('Ingeniero');}
   if (persona.cocinero === true){
      console.log('Cocinero');}
   if (persona.cantante === true){
      console.log('Cantante');}
   if (persona.dj === true) {
      console.log('Disk Jockey');}
   if (persona.guitarrista === true){
      console.log('Guitarrista');}
   if (persona.drone_pilot === true) {
      console.log('Piloto de drones');}
}
// el if se puede usar para condiciones que se quiere revisar se cumplan todas o una sola. el else y else if se usa cuando se quiere revisar que se cumpla una condicion en especifico. 
imprimirProfesiones(persona);

// js es case sensitive a la hora de llamar variables e invocar funciones. 

//else permite ejecutar pedazos de codigo cuando una condicion no se cumple. 

imprimirProfesiones(personaDos);



/// escribir una funcion imprimirSiEsMayorDeEdad imprimir si es mayor de edad o menor de edad una persona. 

function imprimirMayorDeEdad (persona){
   console.log(`${persona.nombre} es:`);
   if (persona.edad <= 18){
      console.log('menor de edad');}
   if (persona.edad >= 18){
         console.log('mayor de edad');}
   }
imprimirMayorDeEdad(persona);