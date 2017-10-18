'use strict';
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../app');
module.exports = app;

describe('homepage', () => {
    it('welcome the user',(done) => {
        request(app).get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/Hello /, done)
    })
});

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
            .expect('Content-Type', /json/)
            .expect(/Péter/, done)
    })

    it('check author',(done) => {
        request(app).post('/author')
            .end(done)
    })
});

describe('a suite of tests', function() {
    this.timeout(500);
  
    it('should take less than 500ms', function(done){
      setTimeout(done, 300);
    });
  
    it('should take less than 500ms as well', function(done){
      setTimeout(done, 350);
    });
});