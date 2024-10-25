'use strict';
/* exported initial */
function initial(array) {
  if (array.length === 0) {
    return [];
  }
  const exceptLastArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    exceptLastArr.push(array[i]);
  }
  return exceptLastArr;
}
