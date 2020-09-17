const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  for (let element of keysArray) {
    if (object[element] === value) {
      return element;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'Stranger Things',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
  sitcom: 'Saved by the Bell',
  reality: 'Survivor'
};

// Testing Object.keys
// console.log(Object.keys(bestTVShowsByGenre));  

// Test Case:

console.log(findKeyByValue(bestTVShowsByGenre, "Stranger Things"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);