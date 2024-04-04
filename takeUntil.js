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

const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, expectedResults1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = [ "I've", 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expectedResults2);