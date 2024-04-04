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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
  
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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



const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertEqual(eqObject(shirtObject, anotherShirtObject),true);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
assertEqual(eqObject(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors:["red", "blue"]};
assertEqual(eqObject(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
assertEqual(eqObject(multiColorShirtObject, longSleeveMultiColorShirtObject), false);