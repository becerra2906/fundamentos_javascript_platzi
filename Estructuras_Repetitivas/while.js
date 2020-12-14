// For es la estructura de repetición más básica. Una un poco más compleja es
// While

// while usa el contrario de for. En vez de parar cuando la condición se vuelva verdadera
// while funciona mientras la condición sea verdadera. Cuando se vuelva falsa, el loop para. 

var alejandro = {
    nombre: "Alejandro",
    apellido: "Becerra",
    edad: 25,
    peso: 68
};

// yo tenía en random la variación del peso, por eso estaba corriendo en un infinite loop. porque las variaciones nunca eran lo suficiente
// para que llegase a la meta. 

const VARIACION_PESO = 0.3;
const AUMENTAR_DE_PESO = (persona)=> persona.peso = persona.peso + VARIACION_PESO;
const BAJAR_DE_PESO = (persona)=> persona.peso = persona.peso - VARIACION_PESO;
const probabilidadDeBajar = () => Math.random(0,1)
var dias = 0

const META = alejandro.peso - 3

while (alejandro.peso > META) {

    if (probabilidadDeBajar() < 0.4){
        AUMENTAR_DE_PESO(alejandro)

    }
    else if (probabilidadDeBajar() >= 0.4){
        BAJAR_DE_PESO(alejandro)

    }
    dias = dias + 1;
}
 
console.log(`Pasaron ${dias} dias para que ${alejandro.nombre} alcanzara la meta.`)
