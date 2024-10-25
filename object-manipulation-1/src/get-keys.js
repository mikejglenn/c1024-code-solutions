'use strict';
/* exported getKeys */
function getKeys(object) {
  const keysArr = [];
  for (const key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
