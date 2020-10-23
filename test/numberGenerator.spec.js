process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const chai = require('chai');
const numberGenerator = require('../numberGenerator');

describe('numberGenerator', function(){
    it('should return 1 set of cards given 1', function(){
        let result = numberGenerator.randomSetNumbers(1);
        expect(result).to.be.an('array');
        expect(result.length).to.equal(1);
    })
})