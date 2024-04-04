const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const eqObject = function(object1, object2) {
  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);
  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }
  for (const key of keysOfObject1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;
  if (eqObject(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};
const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
assertObjectsEqual(shirtObject, longSleeveShirtObject);