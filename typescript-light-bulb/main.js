'use strict';
const $room = document.querySelector('.room');
const $lightbulb = document.querySelector('.lightbulb');
if (!$room || !$lightbulb) {
  throw new Error('The $room or $lightbulb query failed');
}
$lightbulb.addEventListener('click', () => {
  $room.classList.toggle('lighton');
  $lightbulb.classList.toggle('lighton');
});
