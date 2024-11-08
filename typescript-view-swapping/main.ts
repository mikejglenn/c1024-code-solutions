const $tabContainer = document.querySelector('.tab-container');
const $tabElems = document.querySelectorAll('.tab');
const $viewElems = document.querySelectorAll('.view');
if (!$tabContainer || !$tabElems || !$viewElems) {
  throw new Error('The $tabContainer or $tabElems or $viewElems query failed');
}

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    for (const $tabElem of $tabElems) {
      if ($tabElem === $eventTarget) {
        $tabElem.className = 'tab active';
      } else {
        $tabElem.className = 'tab';
      }
    }

    const dataViewAttr = $eventTarget.getAttribute('data-view');
    for (const $viewElem of $viewElems) {
      if ($viewElem.getAttribute('data-view') === dataViewAttr) {
        $viewElem.className = 'view';
      } else {
        $viewElem.className = 'view hidden';
      }
    }
  }
});
