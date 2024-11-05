# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  `A property of an event object that refers to the element that triggered the event.`

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  `Event "bubbling"`

- What DOM element property tells you what type of element it is?
  `tagName`

- What does the `element.closest()` method take as its argument and what does it return?
  `For its argument 'selectors' it takes a CSS selector string. It returns the closest ancestor Element or itself, which matches the selectors. If there are no such element, null.`

- How can you remove an element from the DOM?
  `With the remove() method.`

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  `Use event delegation by attaching a single event listener to a parent element.`

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
