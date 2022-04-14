class pokemon {
      constructor(name){ // <- Metodo especial
            this.pokeName = name  //Asignamos el atributo  a la variable local
      }
      //*Metodos
      sayHello (){
            console.log(`Mi pokemon ${this.pokeName} te saluda 🖐!!!`)
      }
      
      sayMessage(message){
            console.log(`${this.pokeName} dice: ${message}! ✨`)
      }
}

module.exports = pokemon