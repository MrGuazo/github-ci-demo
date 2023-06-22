const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /resta?num1=8&num2=9', () => {
    it('responde con la resta es: -1', done => {
        request(app)
            .get('/resta?num1=8&num2=9')
            .expect('la resta es: -1', done);
    });
});
