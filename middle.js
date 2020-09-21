// TEST/ASSERTION FUNCTIONS

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


// MIDDLE FUNCTION
// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(arr) {
  let middleIndex = Math.floor(arr.length / 2); // takes arr argument, divides it in half, rounds it down
  console.log('**test**' + middleIndex);
  // console.log('*check*', arr.length); // test: checks length of array given
  if (arr.length <= 2) { // checks if arrays length is less than or equal to 2
    return []; // returns empty array
  } else if (arr.length % 2 === 0) {
    return arr.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return arr.slice(middleIndex, middleIndex + 1);
  }
};


// console.log(middle([1]));
// console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

// assertArraysEqual([middle([1])], [middle([1, 2, 3])]);


// // TEST CODE

// middle([1]); // []
// middle([1, 2]); // []
// middle([1, 2, 3,]); // [2]
// middle([1, 2, 3, 4, 5]); // [3]
// middle([1, 2, 3, 4]); // [2,3]
// middle([1, 2, 3, 4, 5, 6]); // [3, 4]