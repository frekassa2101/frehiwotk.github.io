/* global vowel assert */
describe("reverse", function () {
  it("'Hello world' is the reverse of 'dlrow olleH'", function () {
    assert.equal(reverse("Hello world"), "dlrow olleH");
  });

  it(" 'Good' is the reverse of 'dooG'", function () {
    assert.equal(reverse("Good"), "dooG");
  });
});
