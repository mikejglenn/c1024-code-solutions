/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void {
  let propNotDefined;
  for (const sKey in source) {
    propNotDefined = true;
    for (const tKey in target) {
      if (sKey === tKey) {
        propNotDefined = false;
      }
    }
    if (propNotDefined) {
      target[sKey] = source[sKey];
    }
  }
}
