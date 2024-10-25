'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const vowel of vowels) {
    if (char.toLowerCase() === vowel) {
      return true;
    }
  }
  return false;
}
