//
//
//

var alejandro = {
    nombre: "Alejandro",
    apellido: "Becerra",
    edad :25
}

function imprimirNombreEnMayus (nombre){
    
    nombre = alejandro.nombre.toUpperCase();
    
        console.log(nombre);

    }



// Para tener en cuenta. Tengo que llamar el atributo del campo con las llaves dentro de los parametros
// de la funcion. Definir una variable que es igual al atributo más 1 
// y luego imprimir esa variable y ese es el resultado del cálculo que llevó acabo la función. 

function cumpleanos({edad}){
  var edad = edad + 1; 
    console.log(edad);

}
cumpleanos(alejandro);

// otra forma de haberlo hecho sería

function cumpelanos(persona){
 var edad = persona.edad + 1;
 console.log(edad);
}

cumpelanos(alejandro);

console.log(alejandro);

// yo puedo decidir que la función que ejecuto sobre un objeto
// si afecte el valor que tenía ese atributo en el objeto
// como que solo se use el valor del atributo de forma referencial

// otra forma de hacerlo sería 

function cumpleanios(persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
    
}


// los ... y el nombre del objeto, copian toda la información
// que el objeto original tiene ya y después de ello se puede usar 
// para cambiar los valores de algunos atributos o para agregar atributos
// al objeto

var alejandroMasViejo = cumpleanios(alejandro);

console.log(alejandro);
console.log(alejandroMasViejo);

