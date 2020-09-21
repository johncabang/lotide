const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


// TEST CODE

console.log(eqArrays([1, 2, 3, 4], [1, 2, 3])); // returns false

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // returns true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // returns false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // returns true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // returns false
 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // returns should PASS