/* exported includes */
function includes(array: unknown[], value: unknown): boolean {
  for (const item of array) {
    if (value === item) {
      return true;
    }
  }
  return false;
}
