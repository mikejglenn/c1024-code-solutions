'use strict';
const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay query failed');
let count = 4;
const intervalId = setInterval(() => {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = `${count}`;
  } else {
    clearInterval(intervalId);
    $countdownDisplay.textContent = `~Earth Beeeelooowww Us~`;
  }
}, 1000);
