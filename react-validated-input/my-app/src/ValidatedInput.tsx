import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [passwordInput, setPasswordInput] = useState('');

  let errorMessage = '';
  let passwordIcon = <FaTimes style={{ color: '#cf2a28' }} />;

  if (passwordInput === '') {
    errorMessage = 'A password is required.';
  } else if (passwordInput.length < 8) {
    errorMessage = 'Your password is too short.';
  } else if (!/\d/.test(passwordInput)) {
    errorMessage = 'Your password requires a digit.';
  } else if (!/[A-Z]/.test(passwordInput)) {
    errorMessage = 'Your password requires a capital letter.';
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
    errorMessage = 'Your password requires a special character.';
  } else {
    errorMessage = '';
    passwordIcon = <FaCheck style={{ color: '#6ba84f' }} />;
  }

  return (
    <label>
      Password:
      <div style={{ display: 'flex', margin: '0.4rem 0' }}>
        <input
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          type="password"
          id="password"
          name="password"
          required
        />
        <div style={{ fontSize: '1.3rem', paddingLeft: '0.8rem' }}>
          {passwordIcon}
        </div>
      </div>
      <div style={{ color: '#cf2a28' }}>{errorMessage}</div>
    </label>
  );
}
