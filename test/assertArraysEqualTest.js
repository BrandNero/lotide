const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
describe("#assertArraysEqual", () => {
  it("return true from arrays when  same", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns true from an array with string numbers", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("returns false from an array with numbers in wrong postion", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });
  it("returns true from an array with string numbers", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
  });
});