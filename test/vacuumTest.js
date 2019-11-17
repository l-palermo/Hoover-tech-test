const assert = require('assert');
const { Vacuum } = require('../src/vacuum');

describe('#Vacuum', () => {
  let vacuum;
  before(() => {
    vacuum = new Vacuum();
  });
  it('patchCounter props keep counts of the cleaned patches', () => {
    assert.equal(vacuum.patchCounter, 0);
  });

  describe('#getPatch', () => {
    it('compares the patch locationa with the Hoover location', () => {
      const patchLocation = ['1 2'];
      const currentLocation = '1 2';
      vacuum.getPatch(patchLocation, currentLocation);
      assert.equal(vacuum.patchCounter, 1);
    });
  });
});
