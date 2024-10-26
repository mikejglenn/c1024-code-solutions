'use strict';
/* exported pick */
function pick(source, keys) {
  const pickedObj = {};
  for (const key of keys) {
    for (const sKey in source) {
      if (key === sKey && source[sKey] !== undefined) {
        pickedObj[key] = source[sKey];
      }
    }
  }
  return pickedObj;
}
