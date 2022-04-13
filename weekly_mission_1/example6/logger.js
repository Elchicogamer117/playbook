class Logger {
    constructor (name) {
      this.count = 0
      this.name = name
    }
  
    log (message) {
      this.count++
      console.log('[' + this.name + '] ' + message)
    }
  }
  
  //Convinando los ejercicios 4 y 5
  module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
  module.exports.Logger = Logger // Clase