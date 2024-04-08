const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  let keyOfObject = Object.keys(object);
  for (const key of keyOfObject) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);