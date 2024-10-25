'use strict';
/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  const lastElementsArr = [];
  for (let i = array.length - count; i < array.length; i++) {
    lastElementsArr.push(array[i]);
  }
  return lastElementsArr;
}
