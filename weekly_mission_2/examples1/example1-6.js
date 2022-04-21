// Ejemplo 6: Uso de map para obtener una abreviatura en mayúsculas de una lista de paises

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland','France']
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)