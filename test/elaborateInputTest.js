var assert = require('assert');
var fileData = require('../src/elaborateInput').data
var data = new fileData()


describe('#data() returns:', function() {
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
    assert.deepEqual(data.dustLocation, [ '1 0', '2 2', '2 3' ])
  })
});
