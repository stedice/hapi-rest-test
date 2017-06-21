'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const Config = require('./config').get(process.env.NODE_ENV);
const server = Config.host + ':' + Config.port;
const should = chai.should();

chai.use(chaiHttp);

describe('HTML', function() {
	it('should return a static HTML', function(done) {
  		chai.request(server)
    		.get('/')
    		.end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
              done();
            });
	});
});

describe('Users', function() {
	it('should update users on /users POST', function(done) {
  		chai.request(server)
    		.post('/users')
    		.send({'people[][firstname]': [ 'Jeff', 'Chris', 'Alex', 'Jim', 'Natalie' ],
  				   'people[][surname]': [ 'Stelling', 'Kamara', 'Hammond', 'White', 'Sawyer' ] })
    		.end((err, res) => {
      			res.should.have.status(200);
      			res.should.be.json;
      			res.body.should.be.a('object');
      		  done();
    	});
	});
	it('should return error if no payload on /users POST', function(done) {
  		chai.request(server)
    		.post('/users')
    		.send()
    		.end((err, res) => {
      			res.should.not.have.status(200);
      		  done();
    	});
	});
	it('should list ALL users on /users GET', function(done) {
  		chai.request(server)
    		.get('/users')
    		.end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
      			res.body.should.be.an('object');
              done();
            });
	});
});