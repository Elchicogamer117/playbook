// Ejemplo 10: uso de *every* nos ayuda a validar todos los elementos de una lista, 
//si todos cumplen con la validación que indiques te regresa true, de lo contrario false

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names.every((name) => typeof name === 'string') // every '===' exactamente igual
console.log("Son todos los nombres string: " + areAllStr)

const namesF = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4', 8]
const areAllStrAgain = namesF.every((name) => typeof name == 'string') // every '==' igual
console.log("Son todos los nombres string: " + areAllStrAgain)