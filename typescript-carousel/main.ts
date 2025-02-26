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

function setImgAndDot(): void {
  if (imgIndex < 0) {
    imgIndex = imgArr.length - 1;
  }
  if (imgIndex >= imgArr.length) {
    imgIndex = 0;
  }
  $imgShown?.setAttribute('src', `images/${imgArr[imgIndex]}.png`);
  if ($progressDots) {
    for (let i = 0; i < $progressDots.children.length; i++) {
      if (imgIndex === i) {
        $progressDots.children[i].classList.remove('fa-regular');
        $progressDots.children[i].classList.add('fa-solid');
      } else {
        $progressDots.children[i].classList.remove('fa-solid');
        $progressDots.children[i].classList.add('fa-regular');
      }
    }
  }
}

function incImgIndex(): void {
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

$progressDots.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  if ($eventTarget.tagName === 'I') {
    clearInterval(intervalId);
    imgIndex = +$eventTarget.id.slice(-1);
    setImgAndDot();
    intervalId = setInterval(incImgIndex, 3000);
  }
});
