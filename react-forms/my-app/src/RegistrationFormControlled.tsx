import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('Controlled form: username, password:', { username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
