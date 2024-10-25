/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  for (const value of array) {
    if (value === 7) {
      return true;
    }
  }
  return false;
}
