const eqObjects = function(object1, object2) {
  // Object1, Object2 keys stored in arr1, arr2
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  // Compare object lengths, returns false if not equal
  if (arr1.length !== arr2.length) {
    return false;
  }


  // Loop keys returned for one object
  for (const newArr of arr1) {
    // Condition, check if object1, object2 are arrays, if true call eqArrays
    if (Array.isArray(object1[newArr]) || Array.isArray(object2[newArr])) {
      return eqArrays(object1[newArr], object2[newArr]);
    } else if (object1[newArr] === object2[newArr]) {
      return true;
    } else {
      return false;
    }
  } return false;
};

// Function implementation
// Will take in two objects, console.log a message (passed or failed)

const assertObjectsEqual = function(actual, expected) {
  // import library - util, library's inspect function
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// Test Case: Primitives as values

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba); // returns true

const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc); // returns false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // returns true

const cd2 = { c: "1", d: ["2", 3, 4] };

// console.log returns true ** needs to fix ************************
assertObjectsEqual(cd, cd2); // returns false