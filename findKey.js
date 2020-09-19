const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};
// Test case for assertEqual

// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);

// const findKeyByValue = function(object, value) {
//   const keysArray = Object.keys(object);
//   for (let element of keysArray) {
//     if (object[element] === value) {
//       return element;
//     }
//   }
// };

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) 
      return key;
  }
};

console.log(findKey({
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 },
}, x => x.stars === 3));


// Expected results is key = value