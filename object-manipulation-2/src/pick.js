'use strict';
/* exported pick */
function pick(source, keys) {
  const pickedObj = {};
  for (const sKey in source) {
    for (const key of keys) {
      if (key === sKey && source[sKey] !== undefined) {
        pickedObj[sKey] = source[sKey];
      }
    }
  }
  return pickedObj;
}
