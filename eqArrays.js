const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);



// Implement eqArrays

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    // console.log(arr1.length, arr2.length); // test: check length of arr1 & arr2
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // console.log('*inside for loop*', arr1[i], '**', arr2[i]); // test: check arr1[i], arr2[i] values
    // let e1 = arr1[i]; // create variables for arr1[i], arr2[i]
    // let e2 = arr2[i];
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// Test Case:
console.log(eqArrays([1, 2, 3, 4], [1, 2, 3])); // returns> true

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // returns true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // returns false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // returns true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // returns false
 
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // returns should PASS
