

//*  Al exportar una función/objeto así:  module.exports.verbose

//   Estaremos exportando el contenido con el nombre `verbose`
//   module.exports hará que puedas invocar esta función en otro script como:
//*  const logger = require('./logger_2')
//   y usarla como:
//*  logger.verbose("Heeey!")


module.exports.verbose = (message) => {
      console.log(`verbose: ${message}`)
    }

    module.exports.msj = (message) => {
      console.log(`Imprimi: ${message}`)
    }