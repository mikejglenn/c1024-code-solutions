import { FormEvent } from 'react';

type FormElements = {
  username: HTMLInputElement;
  password: HTMLInputElement;
};

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const currentTarget = event.target as HTMLFormElement;
    const formElements = currentTarget.elements as unknown as FormElements;
    console.log('Uncontrolled form: username, password', {
      username: formElements.username.value,
      password: formElements.password.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" />
      </label>
      <label>
        Password:
        <input name="password" />
      </label>
      <button>Submit</button>
    </form>
  );
}
