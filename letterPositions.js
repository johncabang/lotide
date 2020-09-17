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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('Arrays are equal.');
  } else {
    console.log('Arrays are not equal.');
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


// Test Case:

console.log(letterPositions('housse'));
console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('abcabcabcabc'));

// // Test Case: assertArraysEqual
assertArraysEqual(letterPositions("hello").e, [1]);