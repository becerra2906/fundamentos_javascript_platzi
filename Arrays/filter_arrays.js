// yo puedo filtrar para acceder al contenido de un array cuando éste cumpla algunas condiciones
// para poder filtrar el contenido de un array necesito dos cosas, un array y una condición. ésta condicion
// se expresa como función

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

const mayorDe30 = (personas) => personas.edad >30;  

var personasMayores = personas.filter(mayorDe30);

console.log(personasMayores)

// la función .filter permite filtar los elementos de un array que cumplan x condición. 



