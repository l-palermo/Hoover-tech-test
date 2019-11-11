const assert = require('assert');
const sinon = require('sinon');
const { app } = require('../app');

describe('#app', () => {
  it('run the program and call the stdOut function', () => {
    const consoleLogStub = sinon.stub(console, 'log');
    const hoover = { currentLocation: () => '0 0', patchNumber: 0, move: () => {} };
    app(hoover);
    assert.equal(console.log.calledWith('0 0\n0'), true);
    consoleLogStub.restore();
  });
});
