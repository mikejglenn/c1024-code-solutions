'use strict';
/* exported compact */
function compact(array) {
  const compactedArr = [];
  for (const element of array) {
    if (
      element !== false &&
      element !== null &&
      !Number.isNaN(element) &&
      element !== 0 &&
      element !== undefined &&
      element !== ''
    ) {
      compactedArr.push(element);
    }
  }
  return compactedArr;
}
