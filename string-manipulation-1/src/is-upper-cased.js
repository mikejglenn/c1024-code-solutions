'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  for (const char of word) {
    if (char !== char.toUpperCase()) {
      return false;
    }
  }
  return true;
}
