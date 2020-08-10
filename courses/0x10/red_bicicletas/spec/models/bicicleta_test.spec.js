const mongoose = require('mongoose');
const Bicicleta = require('../../models/bicicleta');
describe('Testing Bicicletas', function () {
    // Execute before each test
    beforeEach(function (done) {
        console.log('In beforeEach...');
        //const mongoDB = 'mongodb://localhost/red-bicicletas';
        const mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('We are connected to test database!');
            done();
        });
    });
    // Execute after each test
    afterEach(function (done) {
        console.log('In afterEach...');
        Bicicleta.deleteMany({}, function (err, success) {
            if (err) console.log(err);
            done();
        });
    });
    // Test
    describe('Bicicleta.createInstance', () => {
        it('Crea una instancia de Bicicleta', () => {
            const a = Bicicleta.createInstance(11, 'blanco', 'urbana', [4.6, -74.0]);
            expect(a.code).toBe(11);
            expect(a.color).toBe('blanco');
            expect(a.modelo).toBe('urbana');
            expect(a.ubicacion[0]).toBe(4.6);
            expect(a.ubicacion[1]).toBe(-74.0);
            console.log('Test finished.')
        });
    });
    // Test
    describe('Bicicleta.allBicis', () => {
        it('Comienza vacia', (done) => {
            Bicicleta.allBicis(function (err, bicis) {
                expect(bicis.length).toBe(0);
                console.log('Test finished.');
                done();
            });
        });
    });
    // Test
    describe('Bicicleta.add', () => {
        it('Agrega solo una bicicleta', (done) => {
            const b = new Bicicleta({ code: 12, color: "negro", modelo: "urbana" });
            Bicicleta.add(b, function (err, newBici) {
                if (err) console.log(err);
                Bicicleta.allBicis(function (err, bicis) {
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(b.code);
                    console.log('Test finished.');
                    done();
                });
            });
        });
    });
    // Test
    describe('Bicicleta.findByCode', () => {
        it('Comienza vacia, creo una bicicletas y busco por código', (done) => {
            Bicicleta.allBicis(function (err, bicis) {
                if (err) console.log(err);
                expect(bicis.length).toBe(0);
            });
            const c = new Bicicleta({ code: 13, color: "blanco", modelo: "urbana" });
            Bicicleta.add(c, function (err, newBici) {
                if (err) console.log(err);
                const d = new Bicicleta({ code: 14, color: "gris", modelo: "montaña" });
                Bicicleta.add(d, function (err, newBici) {
                    if (err) console.log(err);
                    const e = new Bicicleta({ code: 15, color: "negro", modelo: "playa" });
                    Bicicleta.add(e, function (err, newBici) {
                        if (err) console.log(err);
                        Bicicleta.allBicis(function (err, bicis) {
                            if (err) console.log(err);
                            expect(bicis.length).toBe(3);
                        });
                        Bicicleta.findByCode(14, function (err, targetBici) {
                            if (err) console.log(err);
                            expect(targetBici.code).toBe(d.code);
                            expect(targetBici.color).toBe(d.color);
                            expect(targetBici.modelo).toBe(d.modelo);
                            console.log('Test finished.');
                            done();
                        });
                    });
                });
            });
        });
    });
});
/* Disable, Works before mongoose
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
*/