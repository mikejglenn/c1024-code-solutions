import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [tSwitch, setTSwitch] = useState(false);
  return (
    <>
      <div onClick={() => setTSwitch(!tSwitch)} className="switch-wrapper">
        <div className={tSwitch ? 'switch switch-on' : 'switch'}>
          <div className="slider"></div>
        </div>
        <span className="switch-label">{tSwitch ? 'ON' : 'OFF'}</span>
      </div>
    </>
  );
}
