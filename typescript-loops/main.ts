/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen()', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty()', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log("repeatWord('blah', 4)", repeatWord('blah', 4));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('txt');
// let emptyString: string;
logEachCharacter('');
logEachCharacter('Mike Glenn');
logEachCharacter("I'm Mike.");

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([5, 7, 9, 11])', doubleAll([5, 7, 9, 11]));

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log('sumArray([1, 2, 3])', sumArray([1, 2, 3]));

function reverseString(str: string): string {
  let reversed: string = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log("reverseString('learn')", reverseString('learn'));

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(
  "getKeys({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' })",
  getKeys({
    isbn: '978-1449365035',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmayer',
  })
);

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log(
  "getValues({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' })",
  getValues({
    isbn: '978-1449365035',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmayer',
  })
);
