var assert = require('assert');
var readFile = require('../src/inputData')

describe('#input returns:', function() {
  it('input data from file in array format', function() {
    var fileMock = './test/mock/inputFileMock.txt'
    var fileData = readFile.input(fileMock)
    assert.deepEqual(fileData, [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ])
  });
});