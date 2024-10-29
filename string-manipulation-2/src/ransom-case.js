'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let ransomString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomString += string[i].toLowerCase();
    } else {
      ransomString += string[i].toUpperCase();
    }
  }
  return ransomString;
}
