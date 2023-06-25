const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /division?num1=8&num2=8', () => {
    it('responde con la división es: 1', done => {
        request(app)
            .get('/division?num1=8&num2=8')
            .expect('la división es: 1', done);
    });
});