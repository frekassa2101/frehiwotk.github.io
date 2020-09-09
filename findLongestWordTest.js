"use strict";
/* global findLongestWord assert */
describe("findLongestWord", function () {
  it("length of the longest word of ['Adonay', 'Simon', 'Aster','Fre'] is 6 ", function () {
    assert.equal(6, findLongestWord(["Adonay", "Simon", "Aster", "Fre"]));
  });

  it("Length of the Longest Word of ['Naod','Sem','Nued'] is 5", function () {
    assert.equal(5, findLongestWord(["Naoda", "Sem", "Nued"]));
  });
});
