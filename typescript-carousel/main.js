'use strict';
const imgArr = ['001', '004', '007', '025', '039'];
let imgIndex = 0;
const $imgShown = document.querySelector('.images img');
const $previousArrow = document.querySelector('.previous');
const $nextArrow = document.querySelector('.next');
const $progressDots = document.querySelector('.progress-dots');
if (!$imgShown || !$previousArrow || !$nextArrow || !$progressDots) {
  throw new Error(
    `$imgShown or $previousArrow or $nextArrow or $progressDots query failed`
  );
}
function setImgAndDot() {
  if (imgIndex < 0) {
    imgIndex = imgArr.length - 1;
  }
  if (imgIndex >= imgArr.length) {
    imgIndex = 0;
  }
  $imgShown?.setAttribute('src', `images/${imgArr[imgIndex]}.png`);
  if ($progressDots) {
    for (let i = 0; i < $progressDots.children.length; i++) {
      $progressDots.children[i].classList.remove('fa-solid');
      $progressDots.children[i].classList.add('fa-regular');
    }
    $progressDots.children[imgIndex].classList.remove('fa-regular');
    $progressDots.children[imgIndex].classList.add('fa-solid');
  }
}
function incImgIndex() {
  imgIndex++;
  setImgAndDot();
}
let intervalId = setInterval(incImgIndex, 3000);
$previousArrow.addEventListener('click', () => {
  clearInterval(intervalId);
  imgIndex--;
  setImgAndDot();
  intervalId = setInterval(incImgIndex, 3000);
});
$nextArrow.addEventListener('click', () => {
  clearInterval(intervalId);
  imgIndex++;
  setImgAndDot();
  intervalId = setInterval(incImgIndex, 3000);
});
$progressDots.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.tagName === 'I') {
    clearInterval(intervalId);
    imgIndex = +$eventTarget.id.slice(-1);
    setImgAndDot();
    intervalId = setInterval(incImgIndex, 3000);
  }
});
