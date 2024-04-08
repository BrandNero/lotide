const assertArraysEqual = require("./assertArraysEqual");
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};
module.exports = without;
const results = without([1, 2, 3], [1]);
assertArraysEqual(results, [2, 3]); // => [2, 3]

const results1 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(results1, ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);