require('./patcher') // Llamas este módulo que modifica el objeto instanciado
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

logger.customMessage("Mensaje a logger") //No retorna porque se esta instanciando solo imprime lo que marca patcher

logger.log("Mansaje normal")