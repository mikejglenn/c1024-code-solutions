/* exported capitalize */
function capitalize(word: string): string {
  let capWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      capWord += word[i].toUpperCase();
    } else {
      capWord += word[i].toLowerCase();
    }
  }
  return capWord;
}
