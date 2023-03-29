const { getBrandByName } = require('../build/index.js');
const assert = require("assert");
const { EDefaultTypes } = require('../build/types/brand.js');
//Create a test for the index.js file
describe('defaults files', ()=>{
    it('default car', function() {
        assert.equal(getBrandByName("imaginary", "brand", EDefaultTypes.CAR).slug, 'default-car');
    });
    it('default motorbike', function() {
        assert.equal(getBrandByName("imaginary", "brand", EDefaultTypes.MOTORBIKE).slug, 'default-motorbike');
    });
    it('default tractor', function() {
        assert.equal(getBrandByName("imaginary", "brand", EDefaultTypes.TRACTOR).slug, 'default-tractor');
    });
    it('default trailer', function() {
        assert.equal(getBrandByName("imaginary", "brand", EDefaultTypes.TRAILER).slug, 'default-trailer');
    });
    it('default truck', function() {
        assert.equal(getBrandByName("imaginary", "brand", EDefaultTypes.TRUCK).slug, 'default-truck');
    });
})
describe('getBrandByName', function() {
    it('audi a3', function() {
        assert.equal(getBrandByName("audi", "a3").slug, 'audi');
    });
    it('audi a3 sport', function() {
        assert.equal(getBrandByName("audi", "a3 sport").slug, 'audi-sport');
    });
    it('ford sierra', function() {
        assert.equal(getBrandByName("ford", "sierra").slug, 'ford');
    });
    it('ford mustang', function() {
        assert.equal(getBrandByName("ford mustang").slug, 'ford-mustang');
    });
    it('ford mustang 450CV', function() {
        assert.equal(getBrandByName("ford", "mustang 450CV").slug, 'ford-mustang');
    });
    it('mercedes-benz', function() {
        assert.equal(getBrandByName("mercedes-benz").slug, 'mercedes-benz');
    });
    it('mercedes benz', function() {
        assert.equal(getBrandByName("mercedes", "benz").slug, 'mercedes-benz');
    });
    }
);