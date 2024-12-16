# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?
  `layout, state, events`

- How does data flow in React?
  `In React, data flows "unidirectionally" from parent components to child components through props, meaning data can only travel downwards through the component hierarchy, making it a one-way data flow.`

- How can children components modify state in their parents?
  `To set parent state from child component in React, a callback function can be defined in the parent component to update its state. Pass the callback function to the child as a prop. The child calls the callback function via props, sending data to the parent and sets the parent state.`

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
