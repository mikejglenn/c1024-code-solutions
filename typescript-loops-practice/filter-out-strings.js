'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const valueArr = [];
  for (const value of values) {
    if (typeof value !== 'string') {
      valueArr.push(value);
    }
  }
  return valueArr;
}
