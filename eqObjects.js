// assertEqual FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

// eqArrays FUNCTION

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let e1 = arr1[i];
    let e2 = arr2[i];
    if (e1 !== e2) {
      return false;
    }
  }
  return true;
};

// eqObjects FUNCTION

const eqObjects = function(object1, object2) {
  // Object1, Object2 keys stored in arr1, arr2
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  // Compare object lengths, returns false if not equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Loop keys returned for one object
  for (let key of arr1) {
    let objectOneValue = object1[key];
    let objectTwoValue = object2[key];
    // console.log('*check*', arr1);
    // Condition, check if object1, object2 are arrays, if true call eqArrays
    if (Array.isArray(objectOneValue) && Array.isArray(objectTwoValue)) {
            // console.log('*check*', object1[key], object2[key]);
      if (!eqArrays(objectOneValue, objectTwoValue)) {
        return false;
    }
      } else if (objectOneValue !== objectTwoValue) {
          return false;
      }
  } return true;
};


// Test Case: Primitives as values

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(eqObjects(ab, ba)); // returns true

const abc = { a: '1', b: '2', c: '3' };
console.log(eqObjects(ab, abc)); // returns false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log((eqObjects(cd, dc))); // returns true

const cd2 = { c: "1", d: ["2", 3, 4] };

// console.log returns true ** need to fix ************************
console.log(eqObjects(cd, cd2)); // returns false