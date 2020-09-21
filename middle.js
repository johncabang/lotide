// MIDDLE FUNCTION
// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(arr) {
  let middleIndex = Math.floor(arr.length / 2); // takes arr argument, divides it in half, rounds it down
  // console.log('**test**' + middleIndex);
  // console.log('*check*', arr.length); // test: checks length of array given
  if (arr.length <= 2) { // checks if arrays length is less than or equal to 2
    return []; // returns empty array
  } else if (arr.length % 2 === 0) {
    return arr.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return arr.slice(middleIndex, middleIndex + 1);
  }
};

module.exports = middle;