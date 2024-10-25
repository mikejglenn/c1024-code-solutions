/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  for (const char of word) {
    if (char !== char.toUpperCase()) {
      return false;
    }
  }
  return true;
}
