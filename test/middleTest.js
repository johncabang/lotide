const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertEqual');

describe('#middle', () => {
  it('should return [2, 3] for middle([1, 2, 3, 4])', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return [3] for middle([1, 2, 3, 4, 5])', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});


// // TEST CODE

// console.log(middle([1]));  // returns []
// console.log(middle([1, 2]));   // returns []
// console.log(middle([1, 2, 3]));  // returns [2]
// console.log(middle([1, 2, 3, 4]));  // returns [2, 3]
// console.log(middle([1, 2, 3, 4, 5]));  // returns [3]
// console.log(middle([1, 2, 3, 4, 5, 6]));  // returns [3, 4]

// assertArraysEqual([middle([1])], [middle([1, 2, 3])]);