# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  `event. target is a property of an event object that refers to the element that triggered the event`

- What is the effect of setting an element to `display: none`?
  `It is completely removed from the layout, and it doesn't take up any space on the page.`

- What does the `element.matches()` method take as an argument and what does it return?
  `The matches method returns a boolean value - true if the element would be selected by the specified selector string, and false if it wouldn't.`

- How can you retrieve the value of an element's attribute?
  `Use the .getAttribute(attribute) method.`

- At what steps of the solution would it be helpful to log things to the console?
  `Check the tab divs are swapping correctly before checking the view divs are swapping.`

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  `Another .addEventListener would need to added to the new tab.`

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  `The views could each be set manually.`

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
