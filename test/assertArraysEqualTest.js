const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
describe("#assertArraysEqual", () => {
  it("return true from [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns true from [5]", () => {
    assert.strictEqual(assertArraysEqual([5], [5]));
  });
});