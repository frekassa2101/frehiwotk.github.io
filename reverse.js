/* eslint-disable id-length */
"use strict";
/**
 * Returns temp_arr number
 *
 * @param {list} the given empty temp_arr
 * @param {arr} j intial reverse
 * @return {temp_arr} the return
 */
function reverse(string) {
  let temp_arr = "";

  for (let i = string.length - 1; i >= 0; i--) {
    temp_arr += string[i];
  }
  return temp_arr;
}
console.log(reverse("vvbnmmm"));
