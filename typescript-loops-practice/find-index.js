'use strict';
/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}
