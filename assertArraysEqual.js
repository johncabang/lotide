const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('Arrays are equal.');
  } else {
    console.log('Arrays are not equal.');
  }
};

module.exports = assertArraysEqual;