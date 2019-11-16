const { InputParser } = require('./src/InputParser');
const { Hoover } = require('./src/hoover');
const { input, output } = require('./src/input');

function app(Input = input, Parser = InputParser, HooverObj = Hoover, Output = output) {
  const fileData = Input();
  const parser = new Parser(fileData);
  const hooverInstance = new HooverObj(parser);
  hooverInstance.move();
  Output(hooverInstance.currentLocation(), hooverInstance.patchNumber);
}

module.exports.app = app;
