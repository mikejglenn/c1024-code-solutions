/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const valueArr = [];
  for (const value of values) {
    if (value !== null) {
      valueArr.push(value);
    }
  }
  return valueArr;
}
