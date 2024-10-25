/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let capWords = '';
  const stringSplit = string.split(' ');
  for (let i = 0; i < stringSplit.length; i++) {
    let capWord = '';
    if (i !== 0) {
      capWord += ' ';
    }
    for (let j = 0; j < stringSplit[i].length; j++) {
      if (j === 0) {
        capWord += stringSplit[i][j].toUpperCase();
      } else {
        capWord += stringSplit[i][j].toLowerCase();
      }
    }
    capWords += capWord;
  }
  return capWords;
}
