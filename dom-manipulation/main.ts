let clicksNum = 0;
const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('$hotButton does not exist');

const $clickCount = document.querySelector('.click-count');
if (!$clickCount) throw new Error('$clickCount does not exist');

$hotButton.addEventListener('click', () => {
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  clicksNum++;
  // console.log(clicksNum);
  $clickCount.textContent = String(clicksNum);
  if (clicksNum < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicksNum < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicksNum < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicksNum < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicksNum < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
