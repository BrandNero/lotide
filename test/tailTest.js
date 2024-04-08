const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
const singleElementArray = tail(["Hello"]);
const emptyArray = tail([]);
const words = ["Hello", "Lighthouse", "Labs"];
describe("#assertEqual", () => {
  it("return true from 2", () => {
    assert.strictEqual(assertEqual(result.length, 2));
  });
  it("returns return the first index from an array", () => {
    assert.strictEqual(assertEqual(result[0], "Lighthouse"));
  });
  it("return the second index from an array", () => {
    assert.strictEqual(assertEqual(result[1], "Labs"));
  });
  it("returns the length from an array with 1 index", () => {
    assert.strictEqual(assertEqual(singleElementArray.length, 0));
  });
  it("returns the length from an array with no index", () => {
    assert.strictEqual(assertEqual(emptyArray.length, 0));
  });
  it("returns the length from an array", () => {
    assert.strictEqual(assertEqual(words.length, 3));
  });
});