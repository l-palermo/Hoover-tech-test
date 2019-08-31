var file = require('./inputData').input;

(function(exports) {

  function data(input = new file()) {
  this._data = input;
  this.Xmax;
  this.Ymax;
  this.hooverX;
  this.hooverY;
  this.directions;
  this.dustLocation;
  this.run();
  }

  data.prototype = {
  _roomDimension: function() {
  var room = this._data.splice(0, 1).join();
  this.Xmax = room[0];
  this.Ymax = room[2];
  },

  _hooverLocation: function() {
  var hooverLocation = this._data.splice(0, 1).join();
  this.hooverX = hooverLocation[0];
  this.hooverY = hooverLocation[2];
  },

  _directions: function() {
  this.directions = this._data.pop().split('');
  },

  run: function() {
  this._roomDimension();
  this._hooverLocation();
  this._directions();
  this.dustLocation = this._data;
  }
  }
  exports.data = data;
})(this);
