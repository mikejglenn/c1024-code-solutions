'use strict';
const $heading = document.querySelector('.message');
if (!$heading) throw new Error('$heading query failed');
setTimeout(() => {
  $heading.textContent = 'Hello There';
}, 2000);
