var data = require('./elaborateInput').data;

class Hoover {
  constructor(inputData = new data()) {
    this.positionX = inputData.hooverX;
    this.positionY = inputData.hooverY;
    this.directions = inputData.directions;
    this.dustLocation = inputData.dustLocation;
    this.currentLocation = [this.positionX + ' ' + this.positionY]; // function? 
  }

  cleanDust () {
    for(var i = 0; i < this.dustLocation.length; i++) {
      if(this.dustLocation[i] == this.currentLocation[0]) {
        this.dustLocation.splice(i,1);
        //method to count the eaten dust patches
      }
    }
  }

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
