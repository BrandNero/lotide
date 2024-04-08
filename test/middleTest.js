const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("return the middle from an array with 1 index", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns the middle from an array with 2 index", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("return the middle from an array with 4 index.", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns the middle of an array with 5 index", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});