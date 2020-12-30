// las promesas son valores que aun no conocemos porque no nos han llegado de la petición hecha al servidor

// es la promesa de que ahí va a haber un valor cuando una función asincrona se resuelva

// tienen tres estados: pending (creada sin resolver), fulfilled (se resuleve correctamente), rejected (cuando fallan);

// se pueden ejecutar de forma sincrona como asincrona.

// para sacar el valor fullfilled de una promesa se le manda el método .then(y en el parametro el valor que esperamos)
// para sacar el mensaje de error que bote la promesa y le pasamos el método .catch(y el parametro el error que sucedio);


// sintax de una promesa

//new Promise(function(( {}), function(){} ))


function obtenerPersonaje(){
    return new Promise(resolve,reject){
        .get(url,opts, function(data){
            resolve(data);
            // el resolve no se va a llamar hasta que el get sea exitoso
        
        })
        .fail(function(){
            reject(id)
        })
    }
}

// no entiendo bien esto, creo que en el de async lo voy a entender mejor. Si entiendo que una promesa es el valor que voy a recibir de una petición, que cuando la promesa e resuleve es porque recibi exitosamente la información y que y que cuando falla puedo botar un error.
 

