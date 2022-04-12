
//   Esto también es la declaración de una función
//*  module.exports
//   hará que puedas invocar esta función en otro script como:
//*  const logger = require('./logger_1')
//   y usarla como:
//*  logger("Heeey!")


module.exports = (message) => {
      console.log(`info: ${message}`)
}

// imprime el que esta al final del codigo
module.exports = (message) => {
      console.log(`msj: ${message}`)
}