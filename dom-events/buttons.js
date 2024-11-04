'use strict';
const $button = document.querySelector('.click-button');
if (!$button) throw new Error('$button does not exist');
function handleClick(event) {
  console.log('button clicked');
  console.log('value of event', event);
  console.log('value of event.target', event.target);
}
$button.addEventListener('click', handleClick);
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');
function handleMouseover(event) {
  console.log('button hovered');
  console.log('value of event', event);
  console.log('value of event.target', event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleButton = document.querySelector('.double-click-button');
if (!$doubleButton) throw new Error('$doubleButton does not exist');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('value of event', event);
  console.log('value of event.target', event.target);
}
$doubleButton.addEventListener('dblclick', handleDoubleClick);
