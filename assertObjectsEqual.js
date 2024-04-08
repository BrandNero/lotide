const eqObject = require("./eqObjects");

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
module.exports = assertObjectsEqual;