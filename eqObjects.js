const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const eqObjects = function(object1, object2) {

}



// Test Case: Primitives as values

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(eqObjects(ab, ba)); // returns true

const abc = { a: '1', b: '2', c: '3' };
console.log(eqObjects(ab, abc)); // returns false