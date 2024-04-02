const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
  
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(false);
      } else {
        console.log(true);
      }
    }
  }
};
//eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3, 4], [3, 2, 1]); // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
