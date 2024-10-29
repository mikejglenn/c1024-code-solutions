/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  if (count > array.length) {
    return [];
  }
  const beforeElemArr = [];
  for (let i = 0; i < array.length - count; i++) {
    beforeElemArr.push(array[i]);
  }
  return beforeElemArr;
}
