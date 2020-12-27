function Persona(name, role, email, height){
    this.name = name
    this.role = role
    this.email = email
    this.height = height
   }

// las funciones (los prototipos) que va a tener el prototipo deberían estar hoisted debajo del prototipo para que cuando se llamen durante la ejecución del resto del código, js no retorne el error de que x no es una función.



var alejandro = new Persona ('Alejandro Becerra', 'Admin', 'alejobecerra1995@gmail.com','1.69');

