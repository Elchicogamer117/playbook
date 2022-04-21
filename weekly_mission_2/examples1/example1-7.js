// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries = ['Finland', 'Denmark', 'Sri lanka', 'Sweden', 'Norway', 'Iceland', 'Portugal', 'Netherlands', 'Tanzania']          

const countriesContainingLand = countries.filter((country) => //*? <-esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Paises que incuyen 'land' en su nombre:")
console.log(countriesContainingLand)

const countriesEndsByi = countries.filter((country) => country.endsWith('a'))
console.log("Paises que terminan en i: ")
console.log(countriesEndsByi)

const countriesStartByFoN = countries.filter((country) => country.startsWith('F') || country.startsWith('N'))
console.log("Paises que empiezan en F o N: ")
console.log(countriesStartByFoN)