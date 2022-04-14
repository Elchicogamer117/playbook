const Pokemon = require('./pokemon') //*? <- Importamos/llamanos el objero

//* Instanciamos nuevos objetos/pokemones
const pikachu = new Pokemon("pikachu")  
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

//* invocamos ambos metodos para cada pokemon creado
pikachu.sayHello()
pikachu.sayMessage("pika pika!")

bulbasaur.sayHello()
bulbasaur.sayMessage("bulbasur!")

charmander.sayHello()
charmander.sayMessage("charmander cha!")

squirtle.sayHello()
squirtle.sayMessage("squirtle!")