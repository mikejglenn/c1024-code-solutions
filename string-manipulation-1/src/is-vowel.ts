/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const vowel of vowels) {
    if (char.toLowerCase() === vowel) {
      return true;
    }
  }
  return false;
}
