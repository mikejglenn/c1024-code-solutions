'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  for (const char of word) {
    if (char === '-') {
      break;
    }
    if (char !== char.toLowerCase()) {
      return false;
    }
  }
  return true;
}
