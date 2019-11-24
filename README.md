# Hoover TechTest
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
* `> var run = require('./app.js')`<br>Requires the modules app to make it available on the REPL.
* `> run.app()`<br>Start the robotic hoover that will begin its journey through the room and automatically returns the output as required:
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

The app is composed by 2 classes **Hoover** and **InputParser** and 3 modules **input**, **Vacuum**, **output** and *app*.
- `**input**` - It parses the input.txt file to an array of strings.
- `**InputParser**` - It splits the parsed input and save each line in a specif state for the **Hoover** to operate its actions.
- `**Hoover**` -  It has the responsibility of moving around the room using the coordinates and information passed by the InputParser
- `**Vacuum**` - It run trough the patch locations and compares each of them with the **Hoover** current location. Keep count of the patch that has been cleaned.
- `**output**` - It takes the computed states of the **Hoover** and formats them as required.
- `**app**` - It is a runner function that connects the above modules an classes to perform the application objective.

To create this app I have focused on the principles of single responsibilities making sure that each module and class has only one responsibility and perform only related actions.
This approach makes the app more maintanable and implementable.


## Consideration

From the requirements, there is no large user interaction because once the program is initialized performs all the actions automatically so I have decided to code this app to run on the terminal.
I used ES6 features except for the export/import modules that are still not fully supported in Node.js.
All modules and classes are injected in the **app()** functions so developers can easily understand the hierarchy among them. To mock these dependencies I defined default parameters for the **app()** function but I am not sure this is the best approach. I would like to explore other architecture solutions to improve this aspect of the app or improve the testing strategy.

Using correct encapsulation in JavaScript is not as straight forward as in other OOP languages. The properties in the constructor are visible, accessible and modifiable. The use of getter and setter doesn't change the situation, the data is not secure.
One way to at least securing the data would be defining the data as variables and bind to this only methods calls passing the properties to them from the constructor. The code would result harder to read but the data would be secure and just the method calls would be accessible.