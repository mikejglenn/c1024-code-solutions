import './StopWatch.css';
import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

let StopWatchIcon = FaPlay;

export function StopWatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  return (
    <>
      <div className="stopwatch-face">
        <div className="stopwatch-seconds" onClick={() => setElapsedSeconds(0)}>
          {elapsedSeconds}
        </div>
      </div>
      <StopWatchIcon
        className="stopwatch-icon"
        onClick={() => {
          if (intervalId === undefined) {
            StopWatchIcon = FaPause;
            setIntervalId(
              setInterval(
                () => setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1),
                1000
              )
            );
          } else {
            StopWatchIcon = FaPlay;
            clearInterval(intervalId);
            setIntervalId(undefined);
          }
        }}
      />
    </>
  );
}
