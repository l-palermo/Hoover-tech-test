const assert = require('assert');
const { Hoover } = require('../src/hoover');

describe('#hoover', () => {
  describe('#north', () => {
    it('change the hoover Y coordinate by +1 when N', () => {
      const data = { hooverY: 1, Ymax: 5 };
      const direction = 'N';
      const hoover = new Hoover(data);
      hoover.north(direction);
      assert.equal(hoover.positionY, 2);
    });
    it('keep the Y coordinate if postionY = Ymax when N', () => {
      const data = { hooverY: 5, Ymax: 5 };
      const direction = 'N';
      const hoover = new Hoover(data);
      hoover.north(direction);
      assert.equal(hoover.positionY, 5);
    });
  });

  describe('#south', () => {
    it('change the hoover Y coordinate by -1 when S', () => {
      const data = { hooverY: 2 };
      const direction = 'S';
      const hoover = new Hoover(data);
      hoover.south(direction);
      assert.equal(hoover.positionY, 1);
    });
    it('keep the Y coordinate if postionY = 0 when S', () => {
      const data = { hooverY: 0 };
      const direction = 'S';
      const hoover = new Hoover(data);
      hoover.south(direction);
      assert.equal(hoover.positionY, 0);
    });
  });

  describe('#east', () => {
    it('change the hoover X coordinate by +1 when E', () => {
      const data = { hooverX: 1, Xmax: 5 };
      const direction = 'E';
      const hoover = new Hoover(data);
      hoover.east(direction);
      assert.equal(hoover.positionX, 2);
    });
    it('keep the X coordinate if postionX = Xmax when E', () => {
      const data = { hooverX: 5, Xmax: 5 };
      const direction = 'E';
      const hoover = new Hoover(data);
      hoover.east(direction);
      assert.equal(hoover.positionX, 5);
    });
  });

  describe('#west', () => {
    it('change the hoover X coordinate by -1 when W', () => {
      const data = { hooverX: 2 };
      const direction = 'W';
      const hoover = new Hoover(data);
      hoover.west(direction);
      assert.equal(hoover.positionX, 1);
    });
    it('keep the X coordinate if postionX = 0 when W', () => {
      const data = { hooverX: 0 };
      const direction = 'W';
      const hoover = new Hoover(data);
      hoover.west(direction);
      assert.equal(hoover.positionX, 0);
    });
  });

  describe('#currentLocantion', () => {
    it('returns the hoover current location', () => {
      const data = { hooverX: 1, hooverY: 2 };
      const hoover = new Hoover(data);
      assert.equal(hoover.currentLocation(), '1 2');
    });
  });

  describe('#move', () => {
    it('moves the hoover and modifies the current location', () => {
      const data = {
        patchLocation: ['1 2'], hooverX: 0, hooverY: 0, directions: ['N', 'E', 'E'], Xmax: 5, Ymax: 5,
      };
      const vacuum = { getPatch: () => {} };
      const hoover = new Hoover(data, vacuum);
      hoover.move();
      assert.equal(hoover.currentLocation(), '2 1');
    });
  });
});
