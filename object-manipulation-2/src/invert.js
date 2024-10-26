'use strict';
/* exported invert */
function invert(source) {
  const invertedObj = {};
  for (const sKey in source) {
    invertedObj[source[sKey]] = sKey;
  }
  return invertedObj;
}
