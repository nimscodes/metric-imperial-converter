const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("Whole number input", function () {
    assert.equal(convertHandler.getNum("32lbs"), 32);
  });

  test("Decimal input", function () {
    assert.equal(convertHandler.getNum("32.2lbs"), 32.2);
  });

  test("Fractional input", function () {
    assert.equal(convertHandler.getNum("1/2km"), 0.5);
  });

  test("Fractional input with decimal", function () {
    assert.equal(convertHandler.getNum("2.5/5km"), 0.5);
  });

  test("Double fractions", function () {
    assert.equal(convertHandler.getNum("3/2/3"), "invalid number");
  });

  test("Default to 1 when no number provided", function () {
    assert.equal(convertHandler.getNum("kg"), 1);
  });
  test('Read each valid input unit', function(){
    assert.equal(convertHandler.getUnit('1kg'), 'kg');
  });
  test('should correctly return an error for an invalid input unit', function() {
    assert.equal(convertHandler.getUnit('32randomUnit'), 'invalid unit');
  });
  
  test('should return the correct return unit for each valid input unit', function() {
    assert.equal(convertHandler.getReturnUnit('gal'), 'l');
    assert.equal(convertHandler.getReturnUnit('l'), 'gal');
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });
  
  test('should correctly return the spelled-out string unit for each valid input unit', function() {
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
    assert.equal(convertHandler.spellOutUnit('l'), 'liters');
    assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
    assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
    assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
  });
  
  test('correctly convert gal to L', function() {
    assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.1);
  });
  
  test('correctly convert L to gal', function() {
    assert.approximately(convertHandler.convert(1, 'l'), 0.264172, 0.1);
  });
  
  test('correctly convert mi to km', function() {
    assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.1);
  });
  
  test('correctly convert km to mi', function() {
    assert.approximately(convertHandler.convert(1, 'km'), 0.621371, 0.1);
  });
  
  test('correctly convert lbs to kg', function() {
    assert.approximately(convertHandler.convert(1, 'lbs'), 0.453592, 0.1);
  });
  
  test('correctly convert kg to lbs', function() {
    assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.1);
  });
  

});
