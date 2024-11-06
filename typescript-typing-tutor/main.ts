const $characters = document.querySelectorAll('span');
const $accuracyEl = document.getElementById('accuracy');
const $dialog = document.querySelector('dialog');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$characters || !$accuracyEl || !$dialog || !$dismissModal) {
  throw new Error(
    'The $characters or $accuracyEl or $dialog or $dismissModal query failed'
  );
}

let charIndex = 0;
let keyPresses = 0;
let accuracyPercent = 0;

function updateAccuracy(): void {
  if (!$accuracyEl) {
    throw new Error('The $characters or $accuracyEl query failed');
  }
  if (keyPresses !== 0) {
    accuracyPercent = charIndex / keyPresses;
  } else {
    accuracyPercent = 0;
  }
  $accuracyEl.innerText = 'Accuracy: ' + accuracyPercent * 100 + '%';
}

$dismissModal.addEventListener('click', () => {
  charIndex = 0;
  keyPresses = 0;
  updateAccuracy();
  for (const char of $characters) {
    char.className = '';
  }
  $characters[0].className = 'current';
  $dialog.close();
});

document.body.addEventListener('keydown', (event: KeyboardEvent) => {
  if (charIndex >= $characters.length) {
    return;
  }

  if ($characters[charIndex].innerText === event.key) {
    $characters[charIndex].className = 'correct';
    charIndex++;

    if (charIndex < $characters.length) {
      $characters[charIndex].className = 'current';
    }

    keyPresses++;
    updateAccuracy();

    if (charIndex === $characters.length) {
      $dialog.showModal();
    }

    return;
  }

  keyPresses++;
  updateAccuracy();
  $characters[charIndex].className = 'wrong';
});
