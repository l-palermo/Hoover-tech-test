# TechTest
-----------------
## Description
This technical test consists of a program that drives an imaginary robotic hoover in an imaginary room described by X, Y coordinates. The robot receives instruction from an input.txt file that includes:
 * room dimensions
 * robot location
 * dust patch location
 * navigation directions


After the robot elaborate the given information, moves around the room as per directions, then returns the current location and the number of patches of dirt that have been cleaned up.<br>
> The program runs on the terminal
-----------------
## Instruction
To run the program, create a new folder on your local machine open your text editor and create a new folder then run the following commands:
* `>$ git clone git@github.com:l-palermo/tech-test.git`<br>Clones this repository
* `>$ cd tech-test`
* `>$ npm install`<br>Installs the dependencies
* `>$ npm test`<br>Runs test and test coverage
-----------------
## How to use the program
The program runs via the `app.js` file that works as a controller for the other source files.
Run the following commands:
* `>$ node`<br>Starts the REPL
* `> var app = require('./app.js').application`<br>Requires an instance of the function `app` so you do not need to instantiate it
* `> app.start()`<br>Activate the robotic hoover that will begin its journey through the room and automatically returns the output as required:
   - First line: hoover's current location
   - Second line: number of the patches of dirt cleaned up
-----------------
## Tech
* `Node.js/Javascript`
* `Mocha`<br>Test framework
* `NYC`<br>Test coverage
* `Sinon`<br>Standalone test spies, stubs and mocks
-----------------
## Approach

I have decided to code this app to run on the terminal, because front the requirement there is no large user interaction and the app computes the output directly from readin the file.
I have decide to use ES6 features except for the export/import modules to allow the app to run on the terminal.
At first I have parsed the input.txt file  

