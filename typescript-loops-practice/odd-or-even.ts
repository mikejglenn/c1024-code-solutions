/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const oddOrEvenArr = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      oddOrEvenArr.push('even');
    } else {
      oddOrEvenArr.push('odd');
    }
  }
  return oddOrEvenArr;
}
