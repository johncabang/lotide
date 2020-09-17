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

