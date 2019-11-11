const { Hoover } = require('./src/hoover');
const { output } = require('./src/inputOutput');

function app(hooverInstance = new Hoover(), Output = output) {
  const hoover = hooverInstance;
  hoover.move();
  Output(hoover.currentLocation(), hoover.patchNumber);
}

module.exports.app = app;
