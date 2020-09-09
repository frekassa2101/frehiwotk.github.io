/* eslint-disable id-length */
"use strict";
/**
 * Returns sum max number
 *
 * @param {arr}
 * @param {arr} find the logest
 * @return {arrlength}  thje max one
 */
function findLongestWord(arr) {
  let arrlength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > arrlength) {
      arrlength = arr[i].arrlength;
    }
  }
  return arrlength;
}
console.log(findLongestWord(["Adonay", "Simon", "Aster", "Friatey"]));
