// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.

const names = ['John 117', 'Fernando Esparza', 'Cortana A.K.A el arma']
const result = names.findIndex((name) => name.length > 8)
console.log(`El primer elemento cuya palabra sea mayor a 8 esta en la posición ${result}`)