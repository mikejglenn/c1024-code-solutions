import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <div onClick={() => setIsSwitchOn(!isSwitchOn)} className="switch-wrapper">
      <div className={`switch ${isSwitchOn ? 'switch-on' : ''}`}>
        <div className="slider"></div>
      </div>
      <span className="switch-label">{isSwitchOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
