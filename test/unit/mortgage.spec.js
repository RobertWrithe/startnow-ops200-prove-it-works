const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(100000, 5.5, 30, 12);
        mortgage2 = new Mortgage(150000, 5.5, 60, 12);

    });

    it('should contain a constructor', () => {
        expect(mortgage.constructor).to.exist;
    });

    it('should have an monthly payment function', () => {
        expect(mortgage.monthlyPayment()).to.exist;
    });

    it('should return correct amount', () => {
        expect(mortgage.monthlyPayment()).to.equal(567.7890013470025);
    });

    it('should return correct amount', () => {
        expect(mortgage2.monthlyPayment()).to.equal(714.0351883942365);
    });

});