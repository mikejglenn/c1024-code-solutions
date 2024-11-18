const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('$countdownDisplay query failed');

let count = 4;

const intervalId = setInterval(() => {
  count--;
  $countdownDisplay.textContent = `${count}`;
  if (count < 1) {
    clearInterval(intervalId);
    $countdownDisplay.textContent = `~Earth Beeeelooowww Us~`;
  }
}, 1000);
