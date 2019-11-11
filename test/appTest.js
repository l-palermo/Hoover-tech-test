const assert = require('assert');
const sinon = require('sinon');
const { app } = require('../app');

describe('#app', () => {
  it('run the program and call the stdOut function', () => {
    const consoleLogStub = sinon.stub(console, 'log');
    const input = () => {};
    const inputParser = function inputParser() { this.prop = null; };
    const hoover = function hoover() {
      this.move = () => {};
      this.currentLocation = () => {};
      this.patchNumber = 0;
    };
    const output = () => { console.log('0 0\n0'); };
    app(input, inputParser, hoover, output);
    assert.equal(console.log.calledWith('0 0\n0'), true);
    consoleLogStub.restore();
  });
});
