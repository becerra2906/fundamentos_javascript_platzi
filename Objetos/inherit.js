function Persona(name, role, email, height){
    this.name = name
    this.role = role
    this.email = email
    this.height = height
   }
   
         
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
   
 function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
 }

function heredaDe(prototipoHijo, prototipoPadre){
 var fn = function() {
     fn.prototype = prototipoPadre.prototype
     prototipoHijo.prototype = new fn 
     prototipoHijo.prototype.constructor = prototipoHijo
 }   
 }


heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}
 var alejandro = new Desarrollador('Alejandro', 'Becerra','alejobecerra1995@gmail.com', 1.9);
   
   /// console.log(alejandro.soyAlto());

    console.log(alejandro.saludar());
   

console.log(persona.prototype);

console.log(Desarrollador.prototype);

// prototype nos imprime un objeto con todos los métodos que se le han creado a ese objeto para poder ver que funciones ya tiene asociadas. (permite también ver cual es la función contructora del objeto);