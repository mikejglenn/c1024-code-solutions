/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const afterFirstArr = [];
  for (let i = count; i < array.length; i++) {
    afterFirstArr.push(array[i]);
  }
  return afterFirstArr;
}
