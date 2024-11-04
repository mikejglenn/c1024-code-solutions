console.log('hello, world');

const $h1 = document.querySelector('h1');
console.log('value of $h1', $h1);
console.dir($h1);

const $explanation = document.querySelector('#explanation');
console.log('value of $explanation', $explanation);
console.dir($explanation);

const $hint = document.querySelector('.hint');
console.log('value of $hint', $hint);
console.dir($hint);

const $pElements = document.querySelectorAll('p');
console.log('value of $pElements', $pElements);

const $exampleLinkElements = document.querySelectorAll('.example-link');
console.log('value of $exampleLinkElements', $exampleLinkElements);
