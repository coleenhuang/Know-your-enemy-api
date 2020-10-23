process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
const knex = require('../db/knex');

chai.use(chaiHttp);

describe('API Routes', function(){
    beforeEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
            knex.migrate.latest()
            .then(function() {
                return knex.seed.run()
                .then(function() {
                    done();
                });
            });
        });
    });
    afterEach(function(done) {
        knex.migrate.rollback()
        .then(function (){
            done();
        });
    });

    describe('GET /api/v1/cards', function() {
        it('should return all cards', function(done) {
            chai.request(server)
            .get('/api/v1/cards')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.equal(16);
                res.body[0].should.have.property('content');
                res.body[0].content.should.equal('Ebolavirus');
                res.body[0].should.have.property('set');
                res.body[0].set.should.equal(1);
                done();
            });
        });
    });

    describe('GET /api/v1/cards?sets=1', function(){
        it('should return two cards of the same set', function(done) {
            chai.request(server)
            .get('/api/v1/cards?sets=1')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.equal(2);
                done();
            });
        });
        
    })
})