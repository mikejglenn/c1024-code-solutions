'use strict';
/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  const firstElementsArr = [];
  for (let i = 0; i < count; i++) {
    firstElementsArr.push(array[i]);
  }
  return firstElementsArr;
}
