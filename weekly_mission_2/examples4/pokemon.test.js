import Pokemon from './pokemon'

test('Test 1) Create a new object pokemon', () => {
      const myPokemon = new Pokemon('Pikachu')
      expect(myPokemon.name).toBe('Pikachu'); // <- Salida esperada
});

test('Test 2) Create a new object pokemon', () => {
      const myPokemon = new Pokemon('Pikachu', 'Electric', 25)
      expect(`Name: ${myPokemon.name} Type: ${myPokemon.type} ID: ${myPokemon.id}`).toBe("Name: Pikachu Type: Electric ID: 25"); // <- Salida esperada
});

//* TDD test driven development
// 1) Escribit una prueba de lo que quieres modelar
// 2) Correr la prueba y verla fallar
// 3 Escribir el codigo que haga pasar a esa prueba