// la función map a diferencia de filter, va a devolver un nuevo array en el que va a modificar cada uno de los elementos que se le pase a ese array

var alejandro = {
    nombre: 'Alejandro',
    apellido: 'Becerra',
    edad: 25
};
var jorge ={
    nombre: 'Jorge Alejandro',
    apellido: 'Palacios',
    edad: 73, 
};

var myriam ={
    nombre: 'Myriam',
    apellido: 'Gomez',
    edad: 100, 
};

var gloria ={
    nombre: 'Gloria',
    apellido: 'Palacios',
    edad: 62, 
};

var valentina ={
    nombre: 'Valentina',
    apellido: 'Florez',
    edad: 22, 
};

var personas;  

personas = [alejandro, jorge, myriam, gloria, valentina];

const pasarEdadADias = (personas) =>{
    //personas.edad = personas.edad * 365
return {
    ...personas,
    edad: personas.edad * 365
}}

// para no cambiar el array original, lo que se hace es pedirle a la función que retorne un array nuevo con el cambio que yo quiero ejecutar con la función. 

var personas_dias = personas.map(pasarEdadADias);

console.log(personas_dias);