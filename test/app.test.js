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


