const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("return true from 'Lighthouse Labs'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
  });
  it("returns false from 1, 2", () => {
    assert.strictEqual(assertEqual(1, 2));
  });
  it("return false from 'Lighthouse Labs, bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "bootcamp"));
  });
  it("returns true from 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
});