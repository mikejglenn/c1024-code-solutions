/* exported pick */
function pick(source: Record<string, unknown>, keys: string[]): object {
  const pickedObj: Record<string, unknown> = {};
  for (const key of keys) {
    for (const sKey in source) {
      if (key === sKey && source[sKey] !== undefined) {
        pickedObj[key] = source[sKey];
      }
    }
  }
  return pickedObj;
}
