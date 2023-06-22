const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});
describe('GET /multiplicacion?num1=5&num2=5', () => {
    it('responde con la multiplicacion es: 25', done => {
        request(app)
            .get('/multiplicacion?num1=5&num2=5')
            .expect('la multiplicacion es: 25', done);
    });
});
