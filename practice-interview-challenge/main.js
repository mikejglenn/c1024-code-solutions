'use strict';
function getRangeReport(start, end) {
  const evens = [];
  const odds = [];
  const range = [];
  let total = 0;
  for (let i = start; i <= end; i++) {
    range.push(i);
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
    total += i;
  }
  const average = total / range.length;
  return {
    average,
    evens,
    odds,
    range,
    total,
  };
}
console.log(getRangeReport(1, 10));
console.log(getRangeReport(1, 5));
