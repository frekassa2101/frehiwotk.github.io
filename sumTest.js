"use strict";
/* global sum assert */
describe("sum", function () {
  it("10  is sum [1,2,3,4]", function () {
    assert.equal(sum([1, 2, 3, 4]), 10);
  });

  it("6  is sum of [1,2,3]", function () {
    assert.equal(sum([1, 2, 3]), 6);
  });
});
