/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  for (const char of word) {
    if (char === '-') {
      break;
    }
    if (char !== char.toLowerCase()) {
      return false;
    }
  }
  return true;
}
