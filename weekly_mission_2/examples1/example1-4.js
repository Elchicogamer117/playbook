//* Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
//Array General 
const numbersArray = [1, 2, 3, 4, 5]

//Forma tradicional
const numbersSquare = numbersArray.map(function(num){ return num * num})

//Arrow function and explicit return
//const modifiedArray = array.map((element,index) => element);
const numbersSquareAF = numbersArray.map((num) => {return num * num})


console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)
console.log(numbersSquareAF)