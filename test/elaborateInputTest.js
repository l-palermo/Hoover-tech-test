var assert = require('assert');
var fileData = require('../src/elaborateInput').data
var readFile = require('../src/inputData')
var fileMock = './test/mock/inputFileMock.txt'
var inputMock = readFile.input(fileMock)


describe('#data() returns:', function() {

  beforeEach(() => {
    data = new fileData(inputMock)
  });

  it('maximum rooms coordinates', function() {
    assert.equal(data.Xmax, 5);
    assert.equal(data.Ymax, 5);
  });

  it('initial hoover location coordinates', function() {
    assert.equal(data.hooverX, 1);
    assert.equal(data.hooverY, 2);
  });

  it('hoover direction instructions', function() {
    assert.deepEqual(data.directions, [ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ]);
  });

  it('dust patch locations', function() {
    assert.deepEqual(data.patchLocation, [ '1 0', '2 2', '2 3' ])
  })
});
