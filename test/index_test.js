var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    afterEach(() => {
        delete inputNumber;
        delete expectedResult;
        delete result;
    })
    it('tests if the output of 5! is equal to 120', () => {
        const inputNumber = 5;
        const expectedResult = 120;

        const result = Calculate.factorial(inputNumber);
        assert.equal(result, expectedResult);
    })
    it('tests if the output of 6! is equal to 720', () => {
        const inputNumber = 6;
        const expectedResult = 720;

        const result = Calculate.factorial(inputNumber);
        assert.equal(result, expectedResult);
    })
    it('tests if the edge case 0! is equal to 1', () => {

    })
  });
});