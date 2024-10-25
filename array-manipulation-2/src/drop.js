'use strict';
/* exported drop */
function drop(array, count) {
  const afterFirstArr = [];
  for (let i = count; i < array.length; i++) {
    afterFirstArr.push(array[i]);
  }
  return afterFirstArr;
}
