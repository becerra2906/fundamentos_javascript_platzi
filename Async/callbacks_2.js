// vamos a hacer requests con JQuery a Star Wars api para esperar la información que el servidor manda y usarla dentro del programa. 

// el api es este https://swapi.dev/api/


// content delivery network = CDN


const API_URL ='https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

const ops = {crossDomain: true};


function getLuke(){ $.get(LUKE_URL,ops, function(){

    console.log(arguments);
})}


// tengo literalmente el código del profesor pero ahora no me corre. Originalmente me estaba funcionando pero luego dejó. No entiendo por qué

// creo que tengo un problema con el linking a JQUERY lo soluciono después;
// creo que si veré el curso de JQuery aunque creo que mi enfoque va a ser JS en forma, otras formas de hacer otras consultas a apis y GQL.