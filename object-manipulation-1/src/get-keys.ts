/* exported getKeys */
function getKeys(object: object): string[] {
  const keysArr: string[] = [];
  for (const key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
