/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const valueArr = [];
  for (const value of values) {
    if (typeof value !== 'string') {
      valueArr.push(value);
    }
  }
  return valueArr;
}
