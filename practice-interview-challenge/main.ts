interface ReportObject {
  average: number;
  evens: number[];
  odds: number[];
  range: number[];
  total: number;
}

function getRangeReport(start: number, end: number): ReportObject {
  const evens: number[] = [];
  const odds: number[] = [];
  const range: number[] = [];
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
