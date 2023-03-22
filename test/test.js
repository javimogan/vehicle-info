const { getBrandByName } = require('../build/index.js');
const assert = require("assert");

//Create a test for the index.js file
describe('index.js', function() {
    //Create a test for the index.js file
    it('should return audi', function() {
        assert.equal(getBrandByName("audi`", "a3").slug, 'audi');
    });
    }
);