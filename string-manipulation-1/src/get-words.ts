/* exported getWords */
function getWords(string: string): string[] {
  if (string === '') return [];
  return string.split(' ');
}
