// do while sirve para ejecutar una acción 
// mientras se cumpla una condición.

// en este ejemplo, se va a sumar 1 al contador, cada vez que "llueve" sea falso


var contador
contador = 0

const llueve = () => Math.random()< 0.25;

do {
contador = contador +1
}   while(!llueve());

console.log(`Fui a ver si llovia ${contador} veces.`)