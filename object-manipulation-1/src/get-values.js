'use strict';
/* exported getValues */
function getValues(object) {
  const valuesArr = [];
  for (const key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}
