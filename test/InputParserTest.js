const assert = require('assert');
const { InputParser } = require('../src/InputParser');
const readFile = require('../src/inputOutput');

const fileMock = './test/mock/inputFileMock.txt';

describe('#data returns:', () => {
  let data;
  let inputMock;
  beforeEach(() => {
    inputMock = readFile.input(fileMock);
    data = new InputParser(inputMock);
  });

  it('maximum rooms coordinates', () => {
    assert.equal(data.Xmax, 5);
    assert.equal(data.Ymax, 5);
  });

  it('initial hoover location coordinates', () => {
    assert.equal(data.hooverX, 1);
    assert.equal(data.hooverY, 2);
  });

  it('hoover direction instructions', () => {
    assert.deepEqual(data.directions, ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']);
  });

  it('dust patch locations', () => {
    assert.deepEqual(data.patchLocation, ['1 0', '2 2', '2 3']);
  });
});
