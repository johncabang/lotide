// Implement equal arrays

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


// Return a subset of given array, removing unwanted elements

const without = function(source, itemsToRemove) {
  const filteredArray = source.filter(function(value) {
    return itemsToRemove.indexOf(value) < 0;
  });
  console.log(filteredArray);
};

// Test Case:

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([5, 3, 7, 6, 1, '6'], [2, 1, 1, 3]);
without(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], ['b', 'c', 'g', 'y', 'z', 'a', 'b', 'c']);
without(['apple', 'orange', 'banana', 'cherry', 'strawberry'], ['strawberry', 'cherry']);

// Test Case: Returning a new array and not modify the original array

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);