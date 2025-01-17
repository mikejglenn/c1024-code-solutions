export function countOccurrences(str: string, char: string): number {
  let n = 0;
  for (const c of str) {
    if (c === char) n++;
  }
  return n;
}
