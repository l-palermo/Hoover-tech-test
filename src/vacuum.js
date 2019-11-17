class Vacuum {
  constructor() {
    this.patchCounter = 0;
  }

  getPatch(patchLocation, currentLocation) {
    for (let i = 0; i < patchLocation.length; i += 1) {
      if (patchLocation[i] === currentLocation) {
        patchLocation.splice(i, 1);
        this.patchCounter += 1;
      }
    }
  }
}

exports.Vacuum = Vacuum;
