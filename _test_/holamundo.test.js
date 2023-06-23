const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /multiplicacion?num1=8&num2=9', () => {
    it('responde con la multiplicacion es: 9', done => {
        request(app)
            .get('/multiplicacion?num1=8&num2=9')
            .expect('la multiplicacion es: 9', done);
    });
});
