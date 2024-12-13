import './StopWatch.css';
import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

export function StopWatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const StopWatchIcon = !intervalId ? FaPlay : FaPause;

  function handleIconClick(): void {
    if (!intervalId) {
      setIntervalId(
        setInterval(
          () => setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1),
          1000
        )
      );
    } else {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }

  return (
    <>
      <div className="stopwatch-face">
        <div
          className="stopwatch-seconds"
          onClick={() => {
            if (!intervalId) setElapsedSeconds(0);
          }}>
          {elapsedSeconds}
        </div>
      </div>
      <StopWatchIcon className="stopwatch-icon" onClick={handleIconClick} />
    </>
  );
}
