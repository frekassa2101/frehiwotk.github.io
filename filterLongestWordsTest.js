"use strict";
/* global sum assert */
describe("filterLongestWords", function () {
  it("['Adonay','Simon','Astuka','Fre'],5 is ['Adonay','Astuka']", function () {
    assert.deepEqual(
      filterLongestWords(["Adonay", "Simon", "Astuka", "Fre"], 5),
      ["Adonay", "Astuka"]
    );
  });

  it("['Roman','Kassa','Dani'], 4 is ['Roman','Kassa']", function () {
    assert.deepEqual(filterLongestWords(["Roman", "Kassa", "Dani"], 4), [
      "Roman",
      "Kassa",
    ]);
  });
});
