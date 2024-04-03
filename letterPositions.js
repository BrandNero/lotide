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

const letterPosition = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        console.log(results);
        results[sentence[i]] = [];
      }
    }
    results[sentence[i]].push(i);
  }
  return results;
};
letterPosition("hello");
assertArraysEqual(letterPosition("hello").h, [0]);
assertArraysEqual(letterPosition("hello").e, [1]);
assertArraysEqual(letterPosition("hello").l, [2, 3]);
assertArraysEqual(letterPosition("hello").o, [4]);