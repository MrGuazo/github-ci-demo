const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /suma?num1=8&num2=8', () => {
    it('responde con la suma es: 16', done => {
        request(app)
            .get('/suma?num1=8&num2=8')
            .expect('la suma es: 16', done);
    });
});