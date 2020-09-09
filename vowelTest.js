"use strict";
/* global assert vowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */
describe("isVowel", function () {
  it("a is isVowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is isVowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is isVowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is isVowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is isVowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not isVowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not isVowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
