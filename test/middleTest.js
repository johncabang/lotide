const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// // TEST CODE

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual([middle([1])], [middle([1, 2, 3])]);

// middle([1]); // []
// middle([1, 2]); // []
// middle([1, 2, 3,]); // [2]
// middle([1, 2, 3, 4, 5]); // [3]
// middle([1, 2, 3, 4]); // [2,3]
// middle([1, 2, 3, 4, 5, 6]); // [3, 4]