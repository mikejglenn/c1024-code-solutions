/* exported countdown */
function countdown(num: number): number[] {
  const arrNum = [];
  for (let i = num; i >= 0; i--) {
    arrNum.push(i);
  }
  return arrNum;
}
