// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names'); // imports john and peter
const sayHi = require('./utils'); // imports the sayHi function
const data = require('./alternative-flavor'); // imports data from alternative flavor

// Log the data from alternative-flavor.js
console.log(data); 

// This file runs some logic when imported
require('./mind-grenade');

// Use sayHi function to greet people
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
