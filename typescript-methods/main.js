'use strict';
const heroes = ['Batman', 'Spider-Man', 'Wolverine', 'Prince Namor'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);
const library = [
  { title: 'The Joy of Programming', author: 'John Carmack' },
  { title: 'The Joy of Cooking', author: 'Julia Child' },
  { title: 'The Joy of Baseball', author: 'Yogi Berra' },
];
const lastBook = library.pop();
console.log('value of lastBook:', lastBook);
const firstBook = library.shift();
console.log('value of firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);
const fullName = 'Mike Glenn';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
const employee = {
  name: 'Dave',
  age: '27',
  position: 'Basket Weaver',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employeePairs:', employeePairs);
