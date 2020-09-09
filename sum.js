/* eslint-disable id-length */
"use strict";
/**
 * Returns sum max number
 *
 * @param {number} n1 The number to sum
 * @param {number} n2 the number to
 * @return {number} n3 thje max one
 */
let arr1 = [1, 2, 3, 4];
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let value = sum(arr1);
console.log(value);
