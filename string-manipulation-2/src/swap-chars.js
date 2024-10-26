'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  let charsSwapped = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      charsSwapped += secondChar;
    } else if (i === secondIndex) {
      charsSwapped += firstChar;
    } else {
      charsSwapped += string[i];
    }
  }
  return charsSwapped;
}
