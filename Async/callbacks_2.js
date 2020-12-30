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

// para hacer multiples requests debo crear una función que reciba como párametro el id del elemento que quiero pedirle al api. 

// Para manejar el orden las respuestas que manda un servidor cuando se le hacen requests se debe agregar una función callback a las funciones que hacen el request al backend/servidor
// para que esta se ejecute antes de mostrar las siguientes peticiones y sus respuestas. Ahora bien, si se hace esto se pierde el paralelismo de ejecucion.
// para lograr esto, se pone un function(){funcion_request(segundoId)} para que esta sea el call back del request y se ejecute cuando llegue el request del primero.
// esto se logra nesting las funciones dentro de los call backs (importante que toca llamar al callback dentro de la función desde la que se genera el request al backend). (aunque esto es el llamado "call back hell") 


//