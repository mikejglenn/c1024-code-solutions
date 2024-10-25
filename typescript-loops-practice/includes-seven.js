'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (const value of array) {
    if (value === 7) {
      return true;
    }
  }
  return false;
}
