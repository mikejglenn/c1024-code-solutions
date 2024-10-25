/* exported getValues */
function getValues(object: object): unknown[] {
  const valuesArr: unknown[] = [];
  for (const key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}
