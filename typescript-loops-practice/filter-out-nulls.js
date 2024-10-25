'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const valueArr = [];
  for (const value of values) {
    if (value !== null) {
      valueArr.push(value);
    }
  }
  return valueArr;
}
