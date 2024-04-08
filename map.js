// An array to map
// A callback function
const assertArraysEqual = require("./assertArraysEqual");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
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