# TechTest
-----------------
## Description
This is a technical test that consist on a program that drives an immaginary robotic hoover in an imaginary room described by X,Y coordinates.
The robot receives instruction from a input.txt file that includes:
 * room dimensions
 * robot location
 * dust patch location
 * navigation directions


After the robot elaborate the information give, runs around the room and returns the current location and the number or dustpatch that has been cleaned up.<br>
> This program runs on the terminal
-----------------
## Instruction
To run the program, craete a new folder on your local machine open yuor text editor and create a new folder then run the following commands:
* `>$ git clone git@github.com:l-palermo/TechTest.git`<br>Clone this repository typing on your therminal
* `>$ npm install`<br>Install the dependecies
* `>$ npm test`<br>Run test (100% coverage)
-----------------
## How to use the program
The program runs via the `app.js` file that works as a controller for the other source files.
Run the following commands:
* `node`<br>Starts the REPL
* `var app = require('./app.js').application`<br>Requires an instance of the function `app` so you do not need to instanciate it.
* `app.start()`<br>Activate the robotic hoover that will begin its journey trought the room and automatically returns the output as required:
   - First line: hoover current location
   - Second line: number of the patches of dirt cleaned up
-----------------
## Tech
* `Node.js/Javascript`
* `Mocha`<br>Test framework
* `NYC`<br>Test coverage
* `Sinon`<br>Standalone test spies, stubs and mocks
-----------------

