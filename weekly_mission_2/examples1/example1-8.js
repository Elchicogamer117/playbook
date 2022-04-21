// Ejemplo 8: Filtrar una lista por condicional
const spartans = [
            { name: 'John', ID: 117 },
            { name: 'Kai', ID: 125 },
            { name: 'Vannak', ID: 134 },
            { name: 'Riz', ID: 28 },
            { name: 'Fred', ID: 104 },
            { name: 'Kelly', ID: 87 },
      ]
      
const maxSpartanID = spartans.filter((spartan) => spartan.ID > 104)
      console.log("Filtrando spartans con ID > 104:")
      console.log(maxSpartanID)

const minSpartanID = spartans.filter((spartan) => spartan.ID <= 104)
      console.log("Filtrando spartans con ID < 104:")
      console.log(minSpartanID)
      