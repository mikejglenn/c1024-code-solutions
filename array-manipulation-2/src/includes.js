'use strict';
/* exported includes */
function includes(array, value) {
  for (const item of array) {
    if (value === item) {
      return true;
    }
  }
  return false;
}
