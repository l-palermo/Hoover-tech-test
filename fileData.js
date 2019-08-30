var fs = require('fs')
function data() {
  return fs.readFileSync('input.txt','utf8').split('\n')
}

exports.data = data;

// function Hoover(fileData) {
//   this.data = fileData;
// }

// exports.Hoover = Hoover;

// var ho = new Hoover(fileData)
// console.log(ho)

  // var input_sep = data.split('\n')
  // var directions = input_sep.pop().split('')
  // var room_dimension = input_sep.splice(0, 1).join()
  // var hoover_loaction = input_sep.splice(0, 1).join()
  // var dust = input_sep
  // var x_max = room_dimension[0]
  // var y_max = room_dimension[2]
  // var hoover_x = hoover_loaction[0]
  // var hoover_y = hoover_loaction[2]

  // console.log(input_sep)
  // console.log(directions)
  // console.log(x_max)
  // console.log(y_max)
  // console.log(hoover_x)
  // console.log(hoover_y)






  // var max_x = input_sep[0][0];
  // var max_y = input_sep[0][2];
  // console.log(max_x)
  // console.log(max_y)




