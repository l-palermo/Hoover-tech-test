var file = require('./elaborateInput.js')
var fileData = file.data()

class Hoover {
  constructor() {
    this._fileData = fileData;
    this.Xmax;
    this.Ymax;
    this.hoover_x;
    this.hoover_y;
    this.directions;
    this.dustLocation;
    this.currentLocation = [this.hoover_x, this.hoover_y]
  }
}

Hoover.prototype.move = function() {
  this.directions
};


