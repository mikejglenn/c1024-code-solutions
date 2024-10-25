/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  if (array.length === 0) {
    return [];
  }
  const reversedArr = [];
  for (const element of array) {
    reversedArr.unshift(element);
  }
  return reversedArr;
}
