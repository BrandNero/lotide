const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
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

module.exports = eqObjects;

const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject),true);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors:["red", "blue"]};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);