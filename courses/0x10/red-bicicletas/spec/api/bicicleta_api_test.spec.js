const Bicicleta = require('../../models/bicicleta');
const request = require('request');// Install previously
const server = require('../../bin/www');// Activate server automatically
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