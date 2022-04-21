// Ejemplo 9: Uso de reduce

const numbers = [3, 4, 3, 1, 1, 7]
const resultOfReduce = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0) //*? 0<- Valor inicial
console.log(`La suma de los numeros ${numbers} da como resultado: ${resultOfReduce}`)