const Bicicleta = require('../../models/bicicleta');
// Execute before each test
beforeEach(() => { Bicicleta.allBicis = []; });
// Unit test
describe('Bicicleta.allBicis', () => {
    it('"La lista comienza vacia, no existes bicicletas."', () => {
        // Call property and set response
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});
// Unit test
describe('Bicicleta.add', () => {
    it('"Agregamos una bicicleta."', () => {
        // Check previous state
        expect(Bicicleta.allBicis.length).toBe(0);
        // Create a bike
        let a = new Bicicleta(1, 'blanco', 'urbana', [4.654404, -74.055284]);
        // Call method
        Bicicleta.add(a);
        // Check posterior state
        expect(Bicicleta.allBicis.length).toBe(1);
        // Check correct state
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});
// Unit test
describe('Bicicletas.findById', () => {
    it('"Comprobar una bicicleta por su id."', () => {
        // Check previous state
        expect(Bicicleta.allBicis.length).toBe(0);
        let a = new Bicicleta(1, 'amarillo', 'urbana', [4.654404, -74.055284]);
        let b = new Bicicleta(2, 'azul', 'urbana', [4.651806, -74.056953]);
        let c = new Bicicleta(3, 'rojo', 'urbana', [4.652796, -74.054800]);
        Bicicleta.add(a);
        Bicicleta.add(b);
        Bicicleta.add(c);
        // Call method
        let targetBici = Bicicleta.findById(2);
        // Set response
        expect(targetBici.id).toBe(2);
        expect(targetBici.color).toBe(b.color);
        expect(targetBici.modelo).toBe(b.modelo);
        expect(Bicicleta.allBicis.length).toBe(3);
    });
});
// Unit test
describe('Bicicletas.removeById', () => {
    it('"Comprobar eliminar una bicicleta por su id."', () => {
        // Check previous state
        expect(Bicicleta.allBicis.length).toBe(0);
        let a = new Bicicleta(6, 'negro', 'urbana', [4.654404, -74.055284]);
        // Call method
        Bicicleta.add(a);
        // Set response
        expect(Bicicleta.allBicis.length).toBe(1);
        // Call method
        Bicicleta.removeById(6);
        // Set response
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});