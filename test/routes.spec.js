process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);

describe('API Routes', function(){
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
})