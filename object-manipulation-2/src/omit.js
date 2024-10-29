'use strict';
/* exported omit */
function omit(source, keys) {
  const omittedObj = {};
  let toOmit;
  for (const sKey in source) {
    toOmit = false;
    for (const key of keys) {
      if (key === sKey) {
        toOmit = true;
        break;
      }
    }
    if (!toOmit) {
      // so keep
      omittedObj[sKey] = source[sKey];
    }
  }
  return omittedObj;
}
