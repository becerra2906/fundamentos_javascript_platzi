// se pueden pasar funciones como parametros dentro de otras funciones. 

class Persona  {
 constructor(nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
 }
 saludar(fn){
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
 if (fn){
     fn(this.nombre,this.apellido)
 }
    }
    
 responderSaludo(nombre, apellido){
     console.log(`Buen día ${nombre} ${apellido}`)
 }
} 


var alejandro = new Persona('Alejandro', 'Becerra', '1.69');

alejandro.saludar(responderSaludo());


/// por alguna razon este código no me sirvió. Tengo que mirar bien como es el cuento de pasar funciones como parametro. Creo que fue por el código que generé de cero y no copié de la clase pasada.
