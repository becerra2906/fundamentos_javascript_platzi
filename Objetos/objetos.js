// objetos permiten agrupar varios atributos de objetos de la vida real en
// un solo lugar y acceder fácilmente a ellas. 

// los objetos se pueden usar como parametros de una funcion para hacer uso de 
// la información que contienen en las operaciones de la misma.


var alejandro = {
    nombre: "Alejandro",
    apellido: "Becerra",
    edad :25
}

///function imprimirNombreEnMayus (nombre){
///    nombre = alejandro.nombre.toUpperCase();
///    console.log(nombre);
///}

// también se puede invocar el atributo de un objeto usando llaves y poniendo el 
// atributo en los parametros de la funcion que lo va a recibir. De esta forma
// la función ya sabe que va a llamar ese atributo del objeto que reciba como parametro
// a la hora de ser ejecutada.

// al usar este método se tiene que asegurar que el atributo que se le va a pasar a la función como 
// parámetro siempre va a ser el mismo para que la función pueda usarlos al correr. 

function imprimirNombreEnMayus ({ nombre }){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}


imprimirNombreEnMayus(alejandro);