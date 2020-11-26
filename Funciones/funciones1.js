// antes de que se me olvide. Yo puedo definir
// más de una variable en la misma línea usando comas
// el ejemplo lo puedes ver acá abajo:

var nombre = "Alejandro", edad = 25;

// para definir una funcion se usa la palabra
// reservada function, el nombre a darle a la función,
// dentro de paréntesis los párametros que ésta va a recibir (),
// y luego se abren unas llaves {} que van a contener
// el cuerpo de la función

// los parámetros que las funciones aceptan son los que poblan las operaciones
// que van a ejecutar

// definir parametros me permite alimentar funciones con variables o con datos 
// especificos para que éstas los usen a la hora de hacer los cálculos. 

function imprimirEdad(n,e){
    if (edad === 1){
        console.log(`${n} tiene ${e} año.`)
    }
    else {
    console.log(`${n} tiene ${e} años.`)
    }
}


imprimirEdad(nombre,edad);
imprimirEdad("Jorge",40);
imprimirEdad("Gloria", 63);
imprimirEdad("Luis",73);
imprimirEdad("Carlos",73);
