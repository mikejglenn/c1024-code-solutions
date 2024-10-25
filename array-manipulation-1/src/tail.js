'use strict';
/* exported tail */
function tail(array) {
  if (array.length < 1) {
    return [];
  }
  const afterFirstArr = [];
  for (let i = 1; i < array.length; i++) {
    afterFirstArr.push(array[i]);
  }
  return afterFirstArr;
}
