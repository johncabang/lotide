// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

// eqArrays function

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

// eqObjects function

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

    // Compare values
    // if ((object1[newArr]) !== (object2[newArr])) {
    //     return false;
    // }
    if (Array.isArray(object1[newArr]) || Array.isArray(object2[newArr])) {
      return eqArrays(object1[newArr], object2[newArr]);
    } else if (object1[newArr] === object2[newArr]) {
      return true;
    } else {
      return false;
    }
  } return false;
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