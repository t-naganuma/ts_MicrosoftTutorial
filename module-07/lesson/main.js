"use strict";
exports.__esModule = true;
var greetings_module_1 = require("./greetings_module");
var allGreetingFunctions = require("./greetings_module");
var greeetings_utilities_module_1 = require("./greeetings-utilities_module");
(0, greetings_module_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
(0, greeetings_utilities_module_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
