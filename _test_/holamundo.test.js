const request = require('supertest');
const app = require('../app');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /division?num1=10&num2=5', () => {
    it('responde con la división es: 2', done => {
        request(app)
            .get('/division?num1=10&num2=5')
            .expect('la división es: 2', done);
    });
});