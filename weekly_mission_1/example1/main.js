
let myCar = new Object(); // Creación de un objeto <- No es POO
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

    // Variables de contexto local <- No se refiere al scope
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy un valor que va a ser expuesto"

    // Variable para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
            publicBaz: baz
    }

// Exposición de variables locales <- pasarlo al scope global y se pueda leer
 return exported
})()

console.log(myModule)