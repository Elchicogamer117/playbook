require('./patcher') // Llamas este módulo que modifica el objeto instanciado
//*const patcher = require('./patcher')
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

//*!patcher.customMessage("Mensaje a logger")  <- No funciona poruqe no es una funcion
logger.customMessage("Mensaje a logger") //No retorna porque se esta instanciando solo imprime lo que marca patcher

logger.log("Mansaje normal")

//También pueder instanciar uno nuevo de esta manera:
const customLogger = new logger.constructor('CUSTOM')
customLogger.log('Mensaje customizado')

