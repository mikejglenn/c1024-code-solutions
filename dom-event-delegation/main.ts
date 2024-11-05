const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('The $taskList query failed');

$taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;

  console.log('event.target:', event.target);
  console.log('event.target.tagName', eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const $clsElm = eventTarget.closest('.task-list-item');
    console.log('closest', $clsElm);
    $clsElm?.remove();
  }
});
