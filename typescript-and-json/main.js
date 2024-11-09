'use strict';
const bookArr = [
  {
    isbn: `978-3-16-148410-0`,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    isbn: `978-3-16-148410-1`,
    title: 'Rage',
    author: 'Stephen King',
  },
  {
    isbn: `978-3-16-148410-2`,
    title: 'It',
    author: 'Stephen King',
  },
];
console.log('value of bookArr:', bookArr);
console.log('typeof bookArr:', typeof bookArr);
const jsonBookArr = JSON.stringify(bookArr);
console.log('value of jsonBookArr:', jsonBookArr);
console.log('typeof jsonBookArr');
const jsonStudent = '{"id": "9243", "name": "Mike Glenn"}';
console.log('value of jsonStudent:', jsonStudent);
console.log('typeof jsonStudent:', typeof jsonStudent);
const jsonStudentObj = JSON.parse(jsonStudent);
console.log('value of jsonStudentObj:', jsonStudentObj);
console.log('typeof jsonStudentObj:', typeof jsonStudentObj);
