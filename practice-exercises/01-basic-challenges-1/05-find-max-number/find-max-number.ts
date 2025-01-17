export function findMaxNumber(arr: number[]): number {
  let max = arr[0];
  for (const m of arr) {
    if (m > max) max = m;
  }
  return max;
}
