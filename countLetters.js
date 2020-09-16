const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = function(str) {
  const result = {};
  for (let letter of str) {
    // Removes the spaces
    if (letter !== ' ') {
      // Counter for existing letter
      if (result[letter]) {
        result[letter] += 1;
        // Create letter
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));
console.log(countLetters('john cabang'));