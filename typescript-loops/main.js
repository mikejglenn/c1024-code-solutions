'use strict';
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
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen()', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty()', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log("repeatWord('blah', 4)", repeatWord('blah', 4));
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('txt');
// let emptyString: string;
logEachCharacter('');
logEachCharacter('Mike Glenn');
logEachCharacter("I'm Mike.");
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([5, 7, 9, 11])', doubleAll([5, 7, 9, 11]));
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log('sumArray([1, 2, 3])', sumArray([1, 2, 3]));
function reverseString(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log("reverseString('learn')", reverseString('learn'));
function getKeys(obj) {
  const keys = [];
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
function getValues(obj) {
  const values = [];
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
