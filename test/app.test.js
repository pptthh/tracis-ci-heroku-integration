const request = require('supertest');
const app = require('../app');
module.exports = app;

describe('homepage', () => {
    it('welcome the user',(done) => {
        request(app).get('/')
            .expect(200)
            .expect(/Hello /, done)
    })
});

describe('author', () => {
    it('check author',(done) => {
        request(app).post('/author')
            .expect(200)
            .expect(/Péter/, done)
    })
});


