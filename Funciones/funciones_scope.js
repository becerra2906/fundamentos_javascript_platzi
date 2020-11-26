// cuando una variable no esta definida dentro del cuerpo de una funcion, se dice que esta es de alcance global. Esto quiere decir que cualquier funcion va a poder acceder a ella para realizar sus calculos. 

// asimismo, la variable al no ser definida dentro de una funcion, existe como objeto global (mientras este en node y si es en el navegador existe globalmente a nivel de pagina)

//el utilizar variables globales dentro de funciones tiene como efecto secundario que al ejecutar las operaciones que queramos hacer dentro de la funcion, vamos a afectar el valor global que tenga asociada la funcion. 

// para evitar eso, lo que se hace es definir una variable de scope local dentro de la funcion, que sea la que usemos como parametro de la funcion y  que se nutra de nuestra variable global. De esta forma podemos trabajar con la variable global sin alterar su valor original

// js permite utilizar el mismo nombre de las variables globales para las variables locales que utilicemos en una fucnion, permitiendonos ser mas descriptivos en nuestro codigo. 

var nombre = 'Alejandro'; //nombre tiene alcance global//

function imprimirNombreMayus (n){ // n tiene scope local//
    n = n.toUpperCase();
   console.log(n);
}

imprimirNombreMayus(nombre); 

var apellido = 'Becerra';

function imprimirApellidoMayus(apellido){
   apellido = apellido.toUpperCase();
   return apellido;
}

console.log(imprimirApellidoMayus(apellido));
