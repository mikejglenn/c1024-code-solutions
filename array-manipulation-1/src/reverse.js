'use strict';
/* exported reverse */
function reverse(array) {
  if (array.length === 0) {
    return [];
  }
  const reversedArr = [];
  for (const element of array) {
    reversedArr.unshift(element);
  }
  return reversedArr;
}
