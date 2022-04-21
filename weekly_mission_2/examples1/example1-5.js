// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúscula y/o minusculas

const names = ['Jonh', 'Cortana', 'Halsey', 'Jonhson', 'Fernando Esparza']
const namesToUpperCase = names.map((name) => name.toUpperCase())
const namesToLowerCase = names.map((name) => name.toLowerCase())

console.log("Ejemplo 5: Array de nombres en mayúscula:")
console.log(namesToUpperCase)
console.log("Array de nombres en minúscula:")
console.log(namesToLowerCase)