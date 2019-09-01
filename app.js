const hooverClass = require('./src/hoover').Hoover

function app(Hoover = new hooverClass()) {
  this.hoover = Hoover;
}

app.prototype = {
  start: function() { 
    this.hoover.move();
    this.stdOut();
  },
  outputFormat: function() {
    return this.hoover.currentLocation()+'\n'+this.hoover.patchNumber
  },
  stdOut: function() {
    console.log(this.outputFormat())
  }
}
exports.app = app;

var application = new app();
module.exports.application = application
