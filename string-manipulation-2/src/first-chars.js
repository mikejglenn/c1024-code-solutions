'use strict';
/* exported firstChars */
function firstChars(length, string) {
  if (length > string.length) {
    return string;
  }
  let firstCharsArr = '';
  for (let i = 0; i < length; i++) {
    firstCharsArr += string[i];
  }
  return firstCharsArr;
}
