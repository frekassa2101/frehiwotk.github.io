"use strict";
function isVowel(char) {
  if (char.length == 1) {
    let vowels = "aeiou";
    let isVowel = vowels.indexOf(char) >= 0 ? true : false;
    return isVowel;
  }
}
