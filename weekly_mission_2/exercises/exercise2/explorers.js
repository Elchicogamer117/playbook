const explorers = [
      {
            name: "John 117",
            exercises_completed: 10,
            rate: 99,
            city: "CDMX",
            stack: [
                  "js",
                  "c#"
            ],
            missions: {
            onboarding: {
                  isFinished: true,
                  exercisesFinished: true
            },
            frontend: {
                  isFinished: true,
                  exercisesFinished: true
            }
            }
      },
      {
            name: "Cortana aka el arma",
            exercises_completed: 9,
            city: "Veracruz",
            rate: 50,
            stack: [
                  "js"
            ],
            missions: {
            onboarding: {
                  isFinished: false,
                  exercisesFinished: false
            },
            frontend: {
                  isFinished: false,
                  exercisesFinished: false
            }
            }
      },
      {
            name: "Fernando Esparza",
            exercises_completed: 3,
            city: "Sonora",
            rate: 100,
            stack: [
                  "elixir"
            ],
            missions: {
            onboarding: {
                  isFinished: true,
                  exercisesFinished: true
            },
            frontend: {
                  isFinished: false,
                  exercisesFinished: false
            }
            }
      },
      {
            name: "Cristian Flores",
            exercises_completed: 12,
            city: "CDMX",
            rate: 100,
            stack: [
                  "js",
                  "html",
                  "css",
                  "python",
            ],
            missions: {
            onboarding: {
                  isFinished: true,
                  exercisesFinished: true,
            },
            frontend: {
                  isFinished: true,
                  exercisesFinished: true,
            }
            }
      }
]

// console.log('1.Nombre de cada explorer en la lista:')
// explorers.forEach((element) => console.log(element.name))

// console.log('2.Stack de cada explore:')
// explorers.forEach((explorer) => console.log(explorer.stack))

// console.log('3.Nueva lista con las stacks de cada explorer:')
// const stackExplorer = explorers.map((explorer) =>  {return explorer.stack} )
// console.log (stackExplorer)


const countries = ['Finland', 'Denmark', 'Sri lanka', 'Sweden', 'Norway', 'Iceland', 'Portugal', 'Netherlands', 'Tanzania']  

console.log('4.Lista de explorers que tengan en su stack "js":')
const stackJs = explorers.filter((explorer) => explorer.stack.includes('js'))
console.log(stackJs)
