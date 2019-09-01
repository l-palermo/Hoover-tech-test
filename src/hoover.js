var data = require('./elaborateInput').data;

class Hoover {
  constructor(inputData = new data()) {
    this.Xmax = inputData.Xmax;
    this.Ymax = inputData.Ymax;
    this.positionX = inputData.hooverX;
    this.positionY = inputData.hooverY;
    this.directions = inputData.directions;
    this.patchLocation = inputData.patchLocation;
    this.patchNumber = 0;
  };

  move () {
    this.directions.forEach((direction) => {
      this.north(direction);
      this.south(direction);
      this.east(direction);
      this.west(direction);
      this.cleanPatch();
    })
  };

  cleanPatch () {
    for(var i = 0; i < this.patchLocation.length; i++) {
      if(this.patchLocation[i] == this.currentLocation()) {
        this.patchLocation.splice(i,1);
        this.cleanedPatchNumber();
      };
    };
  };

  cleanedPatchNumber () {
    this.patchNumber ++;
  };

  currentLocation () {
    return this.positionX + ' ' + this.positionY;
  };

  north (direction) {
    if(direction == 'N' && this.positionY < this.Ymax) 
    { this.positionY ++ };
  };

  south (direction) {
    if(direction == 'S' && this.positionY > 0) 
    { this.positionY -- };
  };

  east (direction) {
    if(direction == 'E' && this.positionX < this.Xmax) 
    { this.positionX ++ };
  };

  west (direction) {
    if(direction == 'W' && this.positionX > 0) 
    { this.positionX -- };
  };
};
exports.Hoover = Hoover;
