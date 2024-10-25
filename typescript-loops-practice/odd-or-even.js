'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
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
