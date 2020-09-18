const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('Arrays are equal.');
  } else {
    console.log('Arrays are not equal.');
  }
};

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

// Map function, takes in two arguments - an array to map, a callback function
// Map function will return a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CASE: assertArraysEqual
// const num = [1, 2, 3, 4, 5, 6, 7];
// assertArraysEqual(results1, ['g','c','t','m','t']);
// assertArraysEqual(results1, ['g','c','t']);
// assertArraysEqual(results1, num);