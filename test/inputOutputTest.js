const assert = require('assert');
const sinon = require('sinon');
const { input, output } = require('../src/inputOutput');

describe('#input returns:', () => {
  it('input data from file in array format', () => {
    const fileMock = './test/mock/inputFileMock.txt';
    const fileData = input(fileMock);
    assert.deepEqual(fileData, ['5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW']);
  });
});

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
