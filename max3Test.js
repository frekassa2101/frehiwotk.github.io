"use strict";
/* global max3 assert */
describe("max3", function () {
  it("8 the max of 2,3", function () {
    assert.equal(max3(2, 3, 8), 8);
  });

  it("3 the max of 1,2", function () {
    assert.equal(max3(2, 3, 1), 3);
  });
});
