// Ejemplo 12: Uso de find en una lista de objetos
const spartans = [
            { name: 'John', ID: 117 },
            { name: 'Kai', ID: 125 },
            { name: 'Vannak', ID: 134 },
            { name: 'Riz', ID: 28 },
            { name: 'Fred', ID: 104 },
            { name: 'Kelly', ID: 87 },
      ]
      
      const  minSpartanID = spartans.find((spartan) => spartan.ID < 80)
      console.log(`Primer spartan con ID <80 : ${minSpartanID.name}`)