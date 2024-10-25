'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
