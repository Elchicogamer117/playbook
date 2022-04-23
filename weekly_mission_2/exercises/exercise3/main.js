import Repositorio from "./repo.js"

//* instanciando un objeto con todos los atributos
const playbook = new Repositorio('playBook', 'Elchicogamer117','JavaScript', 18, 2, 1, 5, 2) 
console.log(playbook)
console.log(playbook.getGeneralInfo())
console.log(`Issues Totales: ${playbook.getTotalIssues()}`)

//*instanciando un objeto por default
const launchX = new Repositorio()
console.log(launchX)
console.log(launchX.getGeneralInfo())
console.log(`Total de issues: ${launchX.getTotalIssues()}`)

//*instanciando un objeto con algunos atributos vacios 
const pokedex = new Repositorio('Pokedex','Elchicogamer','', 2, 1, 0,'0' , "",) //*? <- el valor 0 lo toma como vacio y toma el valor by default
console.log(pokedex)
console.log(`Información general: ${pokedex.getGeneralInfo()} | Issues: ${pokedex.getTotalIssues()}`)

