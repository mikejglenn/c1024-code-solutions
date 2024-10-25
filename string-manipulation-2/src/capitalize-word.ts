/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

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
