/* exported numVowels */
function numVowels(string: string): number {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  for (const char of string) {
    for (const vowel of vowelsArr) {
      if (char.toLowerCase() === vowel) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}
