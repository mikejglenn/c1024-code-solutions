# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  `There  are callback functions associated with asynchronous operations are placed into a queue when the operation completes. The JavaScript runtime environment has an event loop that continuously checks this queue and processes the callbacks in the order they arrive. This ensures that the code execution is non-blocking and that operations that take a longer time don't stall the execution of other scripts.`

- What are the three states a Promise can be in?
  `pending, fulfilled, rejected`

- How do you handle the fulfillment of a Promise?
  `Use the .then handler`

- How do you handle the rejection of a Promise?
  `Use the .catch handler`

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
