import myPokemon from './pokemon.js'

const pikachu = new myPokemon("pikachu")  
const bulbasaur = new myPokemon("bulbasaur")
const squirtle = new myPokemon("squirtle")
const charmander = new myPokemon("charmander")

//* invocamos ambos metodos para cada pokemon creado
pikachu.sayHello('Hola') //<- No retorna este mensaje porque es un metodo que no recibe valores
pikachu.sayMessage("pika pika!")

bulbasaur.sayHello('Saludame')
bulbasaur.sayMessage("bulbasur!")

charmander.sayHello('OMG')
charmander.sayMessage("charmander cha!")

squirtle.sayHello('😨') 
squirtle.sayMessage("squirtle!")