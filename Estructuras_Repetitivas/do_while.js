// do while sirve para ejecutar una acción 
// mientras se cumpla una condición.

// en este ejemplo, se va a sumar 1 al contador, cada vez que "llueve" sea falso


var contador
contador = 0

const llueve = () => Math.random()< 0.25;

do {
contador = contador +1
}   while(!llueve());

function vecesLlovia(contador) {
    if(contador === 1){
        console.log(`Fui a ver si llovía 1 vez.`)
    }
    else {
        console.log(`Fui a ver si llovia ${contador} veces.`)
    }
}


console.log(vecesLlovia(contador));

// el ejercicio de clase es cambiar el texto para que si el contador es igual a 1 en vez de decir veces diga vez. 

