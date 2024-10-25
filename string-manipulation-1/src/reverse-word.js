'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversedStr = '';
  for (const char of word) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}
