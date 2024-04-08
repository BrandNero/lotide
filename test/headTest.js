
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 from [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' from ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});