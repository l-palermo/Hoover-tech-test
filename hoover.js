var file = require('./fileData.js')
var fileData = file.data()

class Hoover {
  constructor(fileData) {
    this._fileData = fileData;
    this.Xmax;
    this.Ymax;
    this.hoover_x;
    this.hoover_y;
    this.directions;
    this.dustLocation;
  }
}

Hoover.prototype.elaborateData = function() {
  room(this._fileData);

  var hooverLocation = this._fileData.splice(0, 1).join();
  this.hoover_x = hooverLocation[0];
  this.hoover_y = hooverLocation[2];

  this.directions = this._fileData.pop().split('');
  this.dustLocation = this._fileData
}

var room = function(data) {
  var roomDimesion = data.splice(0, 1).join();
  this.Xmax = roomDimesion[0];
  this.Ymax = roomDimesion[2];
}


var ho = new Hoover(fileData)
ho.elaborateData();

console.log(ho.Xmax)
console.log(ho.Ymax)
console.log(ho.directions)
console.log(ho.dustLocation)

