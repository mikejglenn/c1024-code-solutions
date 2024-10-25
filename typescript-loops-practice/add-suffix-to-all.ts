/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const wordArray = [];
  for (const word of words) {
    wordArray.push(word + suffix);
  }
  return wordArray;
}
