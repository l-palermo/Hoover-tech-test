const { InputParser } = require('./src/InputParser');
const { Hoover } = require('./src/hoover');
const { input } = require('./src/input');
const { output } = require('./src/output');
const { vacuum } = require('./src/vacuum');

function app(Input = input, Parser = InputParser,
  HooverObj = Hoover, Output = output, Vacuum = vacuum) {
  const fileData = Input();
  const parser = new Parser(fileData);
  const vacuumClean = new Vacuum();
  const hooverInstance = new HooverObj(parser, vacuumClean);
  hooverInstance.move();
  Output(hooverInstance.currentLocation(), vacuumClean.patchCounter);
}

module.exports.app = app;
