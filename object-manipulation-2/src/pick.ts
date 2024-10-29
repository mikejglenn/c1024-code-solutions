/* exported pick */
function pick(source: Record<string, unknown>, keys: string[]): object {
  const pickedObj: Record<string, unknown> = {};
  for (const sKey in source) {
    for (const key of keys) {
      if (key === sKey && source[sKey] !== undefined) {
        pickedObj[sKey] = source[sKey];
      }
    }
  }
  return pickedObj;
}
