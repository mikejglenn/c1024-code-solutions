/* exported truncate */
function truncate(length: number, string: string): string {
  if (length > string.length) {
    return string + '...';
  }

  let str = '';
  for (let i = 0; i < length; i++) {
    str += string[i];
  }
  return str + '...';
}
