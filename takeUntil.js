const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break; //stop the loop when a callback is met
    }
    result.push(item);
  }
  return result;
};
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // takeUntil(array, callback)
const expectedResults1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, expectedResults1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // takeUntil(array, callback)
const expectedResults2 = [ "I've", 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expectedResults2);