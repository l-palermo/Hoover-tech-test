const File = require('./inputOutput').input;

function InputParser(input = new File()) {
  this.data = input;
  this.Xmax = null;
  this.Ymax = null;
  this.hooverX = null;
  this.hooverY = null;
  this.directions = null;
  this.patchLocation = null;
  this.run();
}

InputParser.prototype = {

  roomDimension() {
    const room = this.data.splice(0, 1).join();
    this.Xmax = room[0];
    this.Ymax = room[2];
  },

  hooverLocation() {
    const hooverLocation = this.data.splice(0, 1).join();
    this.hooverX = hooverLocation[0];
    this.hooverY = hooverLocation[2];
  },

  actions() {
    this.directions = this.data.pop().split('');
  },

  run() {
    this.roomDimension();
    this.hooverLocation();
    this.actions();
    this.patchLocation = this.data;
  },
};

exports.InputParser = InputParser;
