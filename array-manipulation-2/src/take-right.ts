/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  if (count > array.length) {
    return array;
  }
  const lastElementsArr: unknown[] = [];
  for (let i = array.length - count; i < array.length; i++) {
    lastElementsArr.push(array[i]);
  }
  return lastElementsArr;
}
