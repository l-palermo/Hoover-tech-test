const assert = require('assert');
const sinon = require('sinon');
const appFunction = require('../app').app;

describe('#app', () => {
  beforeEach(() => {
    var hoover = {currentLocation: () => { return '0 0'}, patchNumber: 0, move: () => {}};
    app = new appFunction(hoover);
  })
  describe('#outputFormat', () => {
    it('format the output', () => {
      assert.equal(app.outputFormat(), '0 0\n0');
    });
  });
  describe('#stdOut', () => {
    it('prints the output on the teraminal', () => {
      var consoleLogStub = sinon.stub(console, 'log')
      app.stdOut();
      assert.equal(console.log.calledWith('0 0\n0'), true);
      consoleLogStub.restore();
    });
  });
  describe('#start', () => {
    it('run the program and call the stdOut function', () => {
      var consoleLogStub = sinon.stub(console, 'log')
      app.start();
      assert.equal(console.log.calledWith('0 0\n0'), true);
      consoleLogStub.restore();
    })
  })
})