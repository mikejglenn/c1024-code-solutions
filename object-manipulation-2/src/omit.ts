/* exported omit */
function omit(source: Record<string, unknown>, keys: string[]): object {
  const omittedObj: Record<string, unknown> = {};
  let toOmit;
  for (const sKey in source) {
    toOmit = false;
    for (const key of keys) {
      if (key === sKey) {
        toOmit = true;
        break;
      }
    }
    if (!toOmit) {
      // so keep
      omittedObj[sKey] = source[sKey];
    }
  }
  return omittedObj;
}
