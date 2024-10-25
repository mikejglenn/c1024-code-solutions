/* exported reverseWord */
function reverseWord(word: string): string {
  let reversedStr = '';
  for (const char of word) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}
