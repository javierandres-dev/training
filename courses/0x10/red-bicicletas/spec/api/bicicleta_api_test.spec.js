const mongoose = require('mongoose');
const Bicicleta = require('../../models/bicicleta');
const request = require('request');// Install previously
const server = require('../../bin/www');// Activate server automatically
const base_url = "http://localhost:3000/api/bicicletas";
// Test
describe('Bicicleta API', () => {
    // Execute before each test
    beforeEach(function (done) {
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
    // Unit test
    describe('GET BICICLETAS /', () => {
        it('Status 200', (done) => {
            request.get(base_url, function (error, response, body) {
                let result = JSON.parse(body);
                expect(response.statusCode).toBe(200);
                expect(result.bicicletas.length).toBe(0);
                done();
            });
        });
    });
    // Unit test
    describe('POST BICICLETAS /create', () => {
        it('status 200', (done) => {
            let headers = { 'content-type': 'appication/json' };
            let b = '{"id": 11, "color": "plateado", "modelo": "montaña", "lat": 4.65, "lng": -74.05}';
            request.post({
                headers: headers,
                url: base_url + '/create',
                body: b
            }, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                let bici = JSON.parse(body).bicicleta;
                console.log(bici);
                expect(bici.color).toBe('plateado');
                expect(bici.ubicacion[0]).toBe(4.65);
                expect(bici.ubicacion[1]).toBe(-74.05);
                done();
            });
        });
    });
    // Unit test
    describe('DELETE BICICLETAS /delete', () => {
        it('status 204', (done) => {
            let e = Bicicleta.createInstance(13, 'rosado', 'montaña', [4, -74])
            Bicicleta.add(e, function(err, newBici){
                let headers = { 'content-type': 'application/json' };
            });
            let d = '{"id": 13}';
            request.delete({
                headers: headers,
                url: base_url + '/delete',
                body: d
            }, function (error, response, body) {
                expect(response.statusCode).toBe(204);
                done();
            });
        });
    });
});
/*
 * Before mongoose
// Tests
describe('Bicicleta API', () => {
    beforeEach(() => console.log('testeando...'));
    // Unit test
    describe('GET BICICLETAS /', () => {
        it('Status 200', (done) => {
            expect(Bicicleta.allBicis.length).toBe(0);
            let a = new Bicicleta(10, 'dorado', 'urbana', [4.654404, -74.055284]);
            Bicicleta.add(a);
            expect(Bicicleta.allBicis.length).toBe(1);
            request.get('http://localhost:3000/api/bicicletas', function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });
    // Unit test
    describe('POST BICICLETAS /create', () => {
        it('status 200', (done) => {
            expect(Bicicleta.allBicis.length).toBe(0);
            let headers = { 'content-type': 'application/json' };
            let b = '{"id": 11, "color": "plateado", "modelo": "montaña", "lat": 4.654404, "lng": -74.055284}';
            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: b
            }, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(11).color).toBe('plateado');
                expect(Bicicleta.allBicis.length).toBe(1);
                done();
            });
        });
    });
    // Unit test
    describe('PUT BICICLETAS /update', () => {
        it('status 200', (done) => {
            expect(Bicicleta.allBicis.length).toBe(0);
            let c = new Bicicleta(12, 'negro', 'urbana', [4.654404, -74.055284]);
            Bicicleta.add(c);
            expect(Bicicleta.findById(12).color).toBe('negro');
            expect(Bicicleta.allBicis.length).toBe(1);
            let headers = { 'content-type': 'application/json' };
            let d = '{"id": 12, "color": "blanco", "modelo": "montaña", "lat": 4.654404, "lng": -74.055284}';
            request.put({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/update',
                body: d
            }, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(12).color).toBe('blanco');
                expect(Bicicleta.allBicis.length).toBe(1);
                done();
            });
        });
    });
    // Unit test
    describe('DELETE BICICLETAS /delete', () => {
        it('status 204', (done) => {
            expect(Bicicleta.allBicis.length).toBe(0);
            let e = new Bicicleta(13, 'rosado', 'montaña', [4.654404, -74.055284]);
            Bicicleta.add(e);
            expect(Bicicleta.allBicis.length).toBe(1);
            let headers = { 'content-type': 'application/json' };
            let d = '{"id": 13}';
            request.delete({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/delete',
                body: d
            }, function (error, response, body) {
                expect(response.statusCode).toBe(204);
                expect(Bicicleta.allBicis.length).toBe(0);
                done();
            });
        });
    });
});
*/