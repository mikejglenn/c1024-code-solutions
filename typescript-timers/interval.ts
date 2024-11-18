const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay query failed');

let count = 3;

const intervalId = setInterval(() => {
  $countdownDisplay.textContent = `${count}`;
  count--;
  if (count === 0) {
    clearInterval(intervalId);
    $countdownDisplay.textContent = `~Earth Beeeelooowww Us~`;
  }
}, 1000);
