const assertArraysEqual = require("./assertArraysEqual");
const letterPosition = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};
module.exports = letterPosition;
letterPosition("hello");
assertArraysEqual(letterPosition("hello").h, [0]);
assertArraysEqual(letterPosition("hello").e, [1]);
assertArraysEqual(letterPosition("hello").l, [2, 3]);
assertArraysEqual(letterPosition("hello").o, [4]);