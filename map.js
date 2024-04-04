// An array to map
// A callback function


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["cinnamon", "bun", "is", "super", "good"];
const words2 = ["burger", "king", "excist", "every", "where"];
const results1 = map(words, (word) => word[0]);
const expectedWords1 = ["g", "c", "t", "m", "t"];
const results2 = map(words1, (word) => word[1]);
const expectedWords2 = ["i", "u", "s", "u", "o"];
const results3 = map(words2, (word) => word[2]);
const expectedWords3 = ["r", "n", "c", "e", "e"];
assertArraysEqual(results1, expectedWords1);
assertArraysEqual(results2, expectedWords2);
assertArraysEqual(results3, expectedWords3);