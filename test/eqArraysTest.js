const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("return true from [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
  it("returns false from [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  });
  it("return true from '[\"1\", \"2\", \"3\"]'", () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
  });
  it("returns false from '[\"1\", \"2\", \"3\"]'", () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
  });
});