class InputParser {
  constructor(input) {
    this.data = input;
    this.Xmax = null;
    this.Ymax = null;
    this.hooverX = null;
    this.hooverY = null;
    this.directions = null;
    this.patchLocation = null;
    this.run();
  }

  roomDimension() {
    const room = this.data.splice(0, 1).join();
    this.Xmax = Number(room[0]);
    this.Ymax = Number(room[2]);
  }

  hooverLocation() {
    const hooverLocation = this.data.splice(0, 1).join();
    this.hooverX = Number(hooverLocation[0]);
    this.hooverY = Number(hooverLocation[2]);
  }

  actions() {
    this.directions = this.data.pop().split('');
  }

  run() {
    this.roomDimension();
    this.hooverLocation();
    this.actions();
    this.patchLocation = this.data;
  }
}

exports.InputParser = InputParser;
