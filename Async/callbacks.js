// js no puede generar multi tasks pero por medio del event loop se puede asignar la ejecución de ciertas  tareas a otros procesos.

// los callbacks son funciones que van a ser ejecutadas cuando el programa reciba la respuesta de un servidor después de haberle hecho una petición

// cuando el programa se quede sin funciones por ejecutar en la pila de ejecución es que va a ir a buscar las funciones callback que tiene en la pila de tareas.


// si la pila de ejecución se queda pegada, las funciones callback no se ejecutarán jamás. 


// setTimeout() permite definir que se va a ejecutar después de que pase un intervalo de timepo especifico y definir dicho intervalo

console.log('a');
console.log('d');
setTimeout(function(){
    console.log('b');
}, 0);
setTimeout(function(){
    console.log('c');
},5000)


setTimeout(function(){
    console.log('h');
},1000)

/// todo lo que no tenga interval se va a ejecutar antes de lo que tiene timeout. Porque todo a lo que se le ponga timeout se va a poner en la cola de tareas, que solo se va a ejectuar cuando el navegador termine de ejectuar el resto del programa principal. 


// si el event loop se bloquea, las tareas que estén en por ejecutarse como callbacks, no se van a poder ejecutar. 
