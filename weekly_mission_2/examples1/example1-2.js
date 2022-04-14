// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
let sum2 = 0;

const numList1 = [1, 2, 3, 4, 5];
const numList2 = [3781, 41, 641, 781, 6];

numList1.forEach(num => sum += num) //*? Para cada numero de la lista, en cada iteracion suma su valor 
numList2.forEach(num2 => sum2 += num2)
console.log(`Ejemplo 2: La suma de los elementos de la lista 1 es: ${sum} y de la lista 2 es: ${sum2}`)