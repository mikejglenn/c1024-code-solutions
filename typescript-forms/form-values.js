'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) {
  throw new Error('The $contactForm query failed');
}
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const nameObj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('messageData:', nameObj);
  $contactForm.reset();
});
