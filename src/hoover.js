var data = require('./elaborateInput').data;

class Hoover {
  constructor(inputData = new data()) {
    this.positionX = inputData.hooverX;
    this.positionY = inputData.hooverY;
    this.directions = inputData.directions;
    this.patchLocation = inputData.patchLocation;
    this.patchNumber = 0
    this.currentLocation; 
  }

  cleanPatch () {
    for(var i = 0; i < this.patchLocation.length; i++) {
      if(this.patchLocation[i] == this.currentLocation) {
        this.patchLocation.splice(i,1);
        this.cleanedPatchNumber()
      };
    };
  };

  cleanedPatchNumber () {
    this.patchNumber ++;
  };

  currentLocation () {
    this.currentLocation = this.positionX + ' ' + this.positionY;
  };

  north (direction) {
    if(direction == 'N' && this.positionX < 5) 
    { this.positionX ++ };
  };

  south (direction) {
    if(direction == 'S' && this.positionX > 0) 
    { this.positionX -- };
  };

  east (direction) {
    if(direction == 'E' && this.positionY < 5) 
    { this.positionY ++ };
  }

  west (direction) {
    if(direction == 'W' && this.positionY > 0) 
    { this.positionY -- };
  }
}

exports.Hoover = Hoover;
