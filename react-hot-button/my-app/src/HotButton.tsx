import { useState } from 'react';

export function HotButton() {
  const [count, setCount] = useState(0);

  let bgColor = '';
  if (count < 3) {
    bgColor = '';
  } else if (count < 6) {
    bgColor = 'hot-button0-coldest';
  } else if (count < 9) {
    bgColor = 'hot-button1-colder';
  } else if (count < 12) {
    bgColor = 'hot-button2-cold';
  } else if (count < 15) {
    bgColor = 'hot-button3-hot';
  } else if (count < 18) {
    bgColor = 'hot-button4-hotter';
  } else {
    bgColor = 'hot-button5-hottest';
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)} className={bgColor}>
        Hot Button
      </button>
      <div>{count} Clicks</div>
    </>
  );
}
