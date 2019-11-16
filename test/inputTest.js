const assert = require('assert');
const { input } = require('../src/input');

describe('#input returns:', () => {
  it('input data from file in array format', () => {
    const fileMock = './test/mock/inputFileMock.txt';
    const fileData = input(fileMock);
    assert.deepEqual(fileData, ['5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW']);
  });
});
