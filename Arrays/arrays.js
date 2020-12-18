// los arrays, o arreglos permiten agrupar cierto tipo de datos dentro de una colección sobre
// la que podemos ha<cer operaciones.

// parte 1, iteración sobre arrays. 

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


// hay dos formas con las que yo puedo acceder a los atributos de un objeto que tengo dentro de un arreglo:

// arreglo[0].atributo y arreglo[0]['atributo'];


function imprimir_nombre_de_coleccion(personas){
    for (var i =0; i< personas.length; i = i +1){
        console.log(personas[i].nombre);
    }
}

console.log(imprimir_nombre_de_coleccion(personas));


function imprimir_nombre_y_edad(personas){
    for (var i = 0; i <personas.length; i++){
        var posicion = personas[i];
        console.log(`${posicion.nombre} tiene ${posicion.edad} años.`)
    }
}

console.log(imprimir_nombre_y_edad(personas))