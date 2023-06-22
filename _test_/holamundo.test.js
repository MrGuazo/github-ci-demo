const request = require('supertest');
const app = require('../holamundo');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hola Mundo!', done);
    });
});

describe('GET /porcentaje?num1=100&num2=1' , () => {
    it('responde con el porcentaje es: 0 !', done => {
        request(app)
            .get('/porcentaje?num1=100&num2=1')
            .expect('el porcentaje es: 0' , done);
    });
});
