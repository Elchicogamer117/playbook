// Ejemplo 10: Overrinding methods

class Explorer{
      constructor(name, username, mission){
            this.name = name
            this.username = username
            this.mission = mission
      }

      getNameAndUsername(){
            return `Explorer ${this. name}, username: ${this.username}`
      }
}

class Viajero extends Explorer {
      constructor(name, username, mission, cycle){
            super(name, username, mission) //! SUPER nos ayudará a llamar el constructor padre
            this.cycle = cycle //* Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
      }

      getGeneralInfo(){
            let nameAndUsername = this.getNameAndUsername() //*? llamamos el método de la clase padre
            //* nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
            return `${nameAndUsername}, Ciclo ${this.cycle}`
      }
}

      const explorer1 = new Explorer("Carlo", "LaunchX", "Node JS", "Abril 2022")
      console.log("Ejemplo 10: Overrinding methods")
      console.log(explorer1)
      console.log(`Metodo Padre: ${explorer1.getNameAndUsername()}`) // Método de la clase padre
      //console.log(explorer1.getGeneralInfo()) // Método de la clase hija

      const viajero1 = new Viajero("Cristian", "LaunchX", "Node JS", "February 2022")
      console.log(viajero1)
      console.log("Metodo padre: " + viajero1.getNameAndUsername()) // Método de la clase padre
      console.log(`Metodo hijo:  ${viajero1.getGeneralInfo()}`) // Método de la clase hija
      