/* eslint-disable id-length */
"use strict";
/**
 * Returns array of string that have greater than i
 *
 * @param {Array} array of string
 * @param i is compared with each string
 * @return {Array} the array of string that have greater than i
 */
function filterLongestWords(arr, i) {
  let temp_arr = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length > i) {
      temp_arr.push(arr[j]);
    }
  }
  return temp_arr;
}
