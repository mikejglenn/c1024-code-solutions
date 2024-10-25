'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const wordArray = [];
  for (const word of words) {
    wordArray.push(word + suffix);
  }
  return wordArray;
}
