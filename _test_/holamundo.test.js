const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /resta?num1=8&num2=5', () => {
    it('responde con la multiplicación es: 40', done => {
        request(app)
            .get('/resta?num1=8&num2=5')
            .expect('la multiplicación es: 40', done);
    });
});
