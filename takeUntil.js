// Function that takes in two parameters, an array & a callback

const takeUntil = function(array, callback) {
  let arr = [];
  for (let element of array) {
    if (!callback(element)) {
      arr.push(element);
    } else {
      return arr;
    }
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('Arrays are equal.');
  } else {
    console.log('Arrays are not equal.');
  }
};

// Expected input

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results1, [1, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results2, [ 'I\'ve', 'never', 'been', 'to', 'Hollywood' ]);

// Expected output

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]