export default class pokemon {
      constructor (name) {
            this.pokeName = name
      }

      sayHello (){
            console.log(`Mi pokemon ${this.pokeName} te saluda 🖐!!!`)
      }
      
      sayMessage(message){
            console.log(`${this.pokeName} dice: ${message}! ✨`)
      }
}

