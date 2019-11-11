const assert = require('assert');
const readFile = require('../src/inputOutput');

describe('#input returns:', () => {
  it('input data from file in array format', () => {
    const fileMock = './test/mock/inputFileMock.txt';
    const fileData = readFile.input(fileMock);
    assert.deepEqual(fileData, ['5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW']);
  });
});
