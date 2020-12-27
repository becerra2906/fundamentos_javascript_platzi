function Persona(name, role, email, height){
    this.name = name
    this.role = role
    this.email = email
    this.height = height
   }
   
   
// this en las arrow functions toma el valor de window y no del objeto. 

// this en el espacio global es window por ende las arrow functions le apuntan a window cuando se le intenta usar como un prototype de un objeto.
 
// el debugger sirve para poder tener más información de por qué falla o tiene una conducta no esperada una función cuando ésta se ejecuta. 

// por eso para los prototype de los objetos, se utilizan las funciones normales y no las arrow functions. 

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
   
   var alejandro = new Persona('Alejandro Becerra', 'Agent','alejobecerra1995@gmail.com', 1.9);
   
    console.log(alejandro.soyAlto());
