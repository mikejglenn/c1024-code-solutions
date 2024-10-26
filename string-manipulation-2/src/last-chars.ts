/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (length > string.length) {
    return string;
  }

  let lastCharsArr = '';
  for (let i = string.length - length; i < string.length; i++) {
    lastCharsArr += string[i];
  }
  return lastCharsArr;
}
