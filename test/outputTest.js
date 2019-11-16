const assert = require('assert');
const sinon = require('sinon');
const { output } = require('../src/output');

describe('#output returns:', () => {
  it('output the result to the console', () => {
    const consoleLogStub = sinon.stub(console, 'log');
    const currentLocation = '0 0';
    const patchNumber = 0;
    output(currentLocation, patchNumber);
    assert.equal(console.log.calledWith('0 0\n0'), true);
    consoleLogStub.restore();
  });
});
