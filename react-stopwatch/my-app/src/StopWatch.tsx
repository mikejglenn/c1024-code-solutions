import './StopWatch.css';
import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

export function StopWatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [count, setCount] = useState(0);

  let StopWatchIcon = FaPause;
  StopWatchIcon = FaPlay;

  function handleIconClick() {
    setIntervalId(() => setInterval(() => setCount(count + 1), 1000));
    clearInterval(intervalId);
  }

  return (
    <>
      <div className="stopwatch-wrapper">
        <div className="stopwatch-face">0</div>
      </div>
      <StopWatchIcon className="stopwatch-icon" onClick={handleIconClick} />
    </>
  );
}
