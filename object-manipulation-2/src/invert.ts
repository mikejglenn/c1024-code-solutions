/* exported invert */
function invert(source: Record<string, any>): object {
  const invertedObj: Record<string, any> = {};
  for (const sKey in source) {
    invertedObj[source[sKey]] = sKey;
  }
  return invertedObj;
}
