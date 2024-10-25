/* exported compact */
function compact(array: unknown[]): unknown[] {
  const compactedArr = [];
  for (const element of array) {
    if (
      element !== false &&
      element !== null &&
      !Number.isNaN(element) &&
      element !== 0 &&
      element !== undefined &&
      element !== ''
    ) {
      compactedArr.push(element);
    }
  }
  return compactedArr;
}
