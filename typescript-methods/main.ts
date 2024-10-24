const heroes: string[] = ['Batman', 'Spider-Man', 'Wolverine', 'Prince Namor'];

let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

const randomHero: string = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

interface Book {
  title: string;
  author: string;
}

const library: Book[] = [
  { title: 'The Joy of Programming', author: 'John Carmack' },
  { title: 'The Joy of Cooking', author: 'Julia Child' },
  { title: 'The Joy of Baseball', author: 'Yogi Berra' },
];

const lastBook: Book | undefined = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook: Book | undefined = library.shift();
console.log('value of firstBook:', firstBook);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

const fullName: string = 'Mike Glenn';
const firstAndLastName: string[] = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);

interface Employee {
  name: string;
  age: string;
  position: string;
}

const employee: Employee = {
  name: 'Dave',
  age: '27',
  position: 'Basket Weaver',
};

const employeeKeys: string[] = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);

const employeeValues: string[] = Object.values(employee);
console.log('value of employeeValues:', employeeValues);

const employeePairs: object[] = Object.entries(employee);
console.log('value of employeePairs:', employeePairs);
