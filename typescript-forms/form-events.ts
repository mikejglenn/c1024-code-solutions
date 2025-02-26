function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event.target.name', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event.target.name', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('value of ', eventTarget.name, ':', eventTarget.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');
if (!$userName || !$userEmail || !$userMessage) {
  throw new Error('The $userName or $userEmail or $userMessage query failed');
}

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
