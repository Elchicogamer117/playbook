// Ejemplo 16: Ordenando una lista de objetos
const spartans = [
            { name: 'John', ID: 117 },
            { name: 'Kai', ID: 125 },
            { name: 'Vannak', ID: 134 },
            { name: 'Riz', ID: 28 },
            { name: 'Fred', ID: 104 },
            { name: 'Kelly', ID: 87 },
      ]

      spartans.sort((a, b) => { // podemos invocar una función
            if (a.ID < b.ID) return -1
            if (a.ID > b.ID) return 1
            return 0
      })

      console.log("Ordenando una lista de objetos por ID:")
      console.log(spartans) // sorted ascending