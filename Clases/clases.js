// las clases que se agregaron desde ecmascript 2015, son por debajo prototipos

class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    
    soyAlto(){
        return this.altura >1.8;
    }
}

// la palabra clave extends sirve para heredar metodos de clases padre a la clase hijo


class Desarrollador extends Persona {
constructor (nombre, apellido, altura,especialidad){
    super(nombre,apellido,altura)    
    this.especialidad =  especialidad
}
// super sirve para generar el nuevo objeto usando los valores que ya se tenian desde el constructor de la clase padre. 
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador ${this.especialidad}`);
    }

    soyAlto(){
        return this.altura  > 1.8
    }

    frontend(){
        return this.especialidad === 'frontend'
    }
}

// con la palabra clave class, yo puedo generar una clase a la que puedo meterle una funcion constructora y varios prototipos como métodos que se pueden ejecutar abajo en el código y que pueden ser llamados de la misma forma que los prototipos regulares. 

var sacha = new Persona('sacha', 'lifchizt', 1.90);

var alejandro = new Desarrollador ('Alejandro', 'Becerra', '1.69', 'backend');

console.log(sacha);

console.log(alejandro.frontend());
console.log(alejandro.soyAlto());
console.log(alejandro.saludar());

/// tengo que recordar que cuando llamo a los métodos tengo que ponerles los paréntesis de párametros como si fueran una función o si  no en node voy a ver reflejado solamente que es una función y no el resultado de la misma. 

