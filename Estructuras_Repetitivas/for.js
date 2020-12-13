// las estructuras for permiten iterar por repetidas veces
// por la duración de x variable

var alejandro = {
    nombre: "Alejandro",
    apellido: "Becerra",
    edad: 25,
    peso: 68
};

console.log(`Al inicio del año ${alejandro.nombre} pesaba ${alejandro.peso} kg.`);
//la estructura básica de una iteración con for es la siguiente

///for() {
///     // dentro de las llaves va a ir el código a ejecutarse cada vez que se itere por la duración del ciclo
///}
///

const VARIACION_PESO = Math.random(0,2.5);
const DIAS_DEL_ANIO = 365;
const AUMENTAR_DE_PESO = (persona)=> persona.peso = persona.peso + VARIACION_PESO;
const BAJAR_DE_PESO = (persona)=> persona.peso = persona.peso - VARIACION_PESO;
// La estructura que llevan los párentesis del for es la siguiente:
// primero se crea la variable contadora "i", se separa con ; y se pone la condición
// en este caso que "i" sea menor o igual a 365, y por último se separa con ; y se pone que el contador sume 1 al valor
// de "i" cada vez que itere. Esto se puede hacer de dos formas: i++ o i = i + 1.
    for(var i = 1; i <= DIAS_DEL_ANIO; i = i + 1) {
        var random = Math.random(0,1);
        if (random < 0.25){
            AUMENTAR_DE_PESO(alejandro);
        }
      else if (random<0.5){
            BAJAR_DE_PESO(alejandro);
        }
        else {

        }
    }

console.log(`Al final del año ${alejandro.nombre} pesó ${alejandro.peso.toFixed(1)} kg.`);

// to fixed sirve para que solo se tomen x numero de decimales después de la , en un float.