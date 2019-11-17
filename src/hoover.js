class Hoover {
  constructor(inputData, vacuum) {
    this.Xmax = inputData.Xmax;
    this.Ymax = inputData.Ymax;
    this.positionX = inputData.hooverX;
    this.positionY = inputData.hooverY;
    this.directions = inputData.directions;
    this.patchLocation = inputData.patchLocation;
    this.vacuum = vacuum;
  }

  move() {
    this.directions.forEach((direction) => {
      this.north(direction);
      this.south(direction);
      this.east(direction);
      this.west(direction);
      this.vacuum.getPatch(this.patchLocation, this.currentLocation());
    });
  }

  currentLocation() {
    return `${this.positionX} ${this.positionY}`;
  }

  north(direction) {
    if (direction === 'N' && this.positionY < this.Ymax) { this.positionY += 1; }
  }

  south(direction) {
    if (direction === 'S' && this.positionY > 0) { this.positionY -= 1; }
  }

  east(direction) {
    if (direction === 'E' && this.positionX < this.Xmax) { this.positionX += 1; }
  }

  west(direction) {
    if (direction === 'W' && this.positionX > 0) { this.positionX -= 1; }
  }
}
exports.Hoover = Hoover;
