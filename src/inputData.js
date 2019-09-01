var fs = require('fs')
function input(fileName = './input.txt') {
  return fs.readFileSync(fileName,'utf8').split('\n');
}
exports.input = input;
