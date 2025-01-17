export function titleCase(str: string): string {
  const words = str.toLocaleLowerCase().split(' ');
  return words.map((w) => w[0].toLocaleUpperCase() + w.slice(1)).join(' ');
}
