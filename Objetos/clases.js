function Persona(name, role, email, height){
 this.name = name
 this.role = role
 this.email = email
 this.height = height
}

// retornar el nuevo objeto está implicito en js

// this sirve para hacer referencia a este objeto que estoy construyendo. 

Persona.prototype.soyAlto = function(){
    if (this.height > 1.8) {
        console.log('Soy alto')
    }
    else {
        console.log('Soy bajo')
    }
}

Persona.prototype.saludar = function(){
    console.log (`Hola me llamo ${this.name}`)
}

// yo con .prototype.x puedo definir funciones que se pueden ejecutar sobre ese objeto que defini y que pueden ser llamadas más adelante por el código

var alejandro = new Persona('Alejandro Becerra', 'Agent','alejobecerra1995@gmail.com', 1.9);

 console.log(alejandro.soyAlto());
// new crea un nuevo objeto dado un prototipo, en este caso en persona y por ende ejecuta la funcion


// recap this se usa para agregar informacion al objeto que estoy creando

// new crea un nuevo objeto con la función constructora que uso para generar la clase. 


// comment del ejercicio. Con la primera implementación que hice no me había funcionado porque no estaba imprimiendo el texto que quería
// y porque no le habia ni agregado el parámetro de altura a la función constuctora ni al objeto a crear, por ende cuando se lo agregué a la función
// pero no al objeto nuevo, la función no se podía ejecutar.