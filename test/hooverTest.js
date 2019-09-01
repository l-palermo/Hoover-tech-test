const assert = require('assert');
const Hoover = require('../src/hoover').Hoover

describe('#hoover()', () => {

  describe('#north', () => {
    it('change the hoover X coordinate by +1 when N', () => {
      var data = {hooverX: 1};
      var direction = 'N';
      var hoover = new Hoover(data);
      hoover.north(direction);
      assert.equal(hoover.positionX, 2);
    });
    it('keep the X coordinate if postionX = 5 when N', () => {
      var data = {hooverX: 5};
      var direction = 'N';
      var hoover = new Hoover(data);
      hoover.north(direction);
      assert.equal(hoover.positionX, 5);
    });
  });

  describe('#south', () => {
    it('change the hoover X coordinate by -1 when S', () => {
      var data = {hooverX: 2};
      var direction = 'S';
      var hoover = new Hoover(data);
      hoover.south(direction);
      assert.equal(hoover.positionX, 1);
    });
    it('keep the X coordinate if postionX = 0 when S', () => {
      var data = {hooverX: 0};
      var direction = 'S';
      var hoover = new Hoover(data);
      hoover.south(direction);
      assert.equal(hoover.positionX, 0);
    });
  });

  describe('#east', () => {
    it('change the hoover Y coordinate by +1 when E', () => {
      var data = {hooverY: 1};
      var direction = 'E';
      var hoover = new Hoover(data);
      hoover.east(direction);
      assert.equal(hoover.positionY, 2);
    });
    it('keep the Y coordinate if postionY = 5 when E', () => {
      var data = {hooverY: 5};
      var direction = 'E';
      var hoover = new Hoover(data);
      hoover.east(direction);
      assert.equal(hoover.positionY, 5);
    });
  });

  describe('#west', () => {
    it('change the hoover Y coordinate by -1 when W', () => {
      var data = {hooverY: 2};
      var direction = 'W';
      var hoover = new Hoover(data);
      hoover.west(direction);
      assert.equal(hoover.positionY, 1);
    });
    it('keep the Y coordinate if postionY = 0 when W', () => {
      var data = {hooverY: 0};
      var direction = 'W';
      var hoover = new Hoover(data);
      hoover.west(direction);
      assert.equal(hoover.positionY, 0);
    });
  });

  describe('#cleanDust', () => {
    it('delete a dust patch on matching coordinates', () => {
      var data = {patchLocation: ['1 2'], hooverX: 1, hooverY: 2};
      var hoover = new Hoover(data);
      hoover.currentLocation();
      hoover.cleanPatch();
      assert.deepEqual(hoover.patchLocation, [] )
    });
  });

  describe('#currentLocantion', () => {
    it('returns the hoover current location', () => {
      var data = {hooverX: 1, hooverY: 2};
      var hoover = new Hoover(data);
      hoover.currentLocation();
      assert.equal(hoover.currentLocation, '1 2')
    })
  })

  describe('#cleanedPatchNumber', () => {
    it('counts the number of cleaned patch', () => {
      var data = {patchLocation: ['1 2'], hooverX: 1, hooverY: 2};
      var hoover = new Hoover(data);
      hoover.currentLocation();
      hoover.cleanPatch();
      assert.equal(hoover.patchNumber, 1)
    });
  });

});


"git commit -m 'dev: add function #currentLocation #cleanedPatchNumber + test'"