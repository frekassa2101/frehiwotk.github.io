/* eslint-disable id-length */
"use strict";
/**
 * Returns n3 max3 number
 *
 * @param {number} n1 The number to compare
 * @param {number} n2 the number to compare
 * @return {number} n3 thje max one
 */
function max3(n1, n2, n3) {
  if (n1 >= n2 && n1 >= n3) {
    return n1;
  } else if (n2 >= n1 && n2 >= n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(max3(2, 8, 6));
