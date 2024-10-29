'use strict';
/* exported defaults */
function defaults(target, source) {
  let propNotDefined;
  for (const sKey in source) {
    propNotDefined = true;
    for (const tKey in target) {
      if (sKey === tKey) {
        propNotDefined = false;
      }
    }
    if (propNotDefined) {
      target[sKey] = source[sKey];
    }
  }
}
