'use strict';
function getStudentNames(students) {
  const nameArr = [];
  for (const key in students) {
    nameArr.push(students[key].name);
  }
  return nameArr;
}
