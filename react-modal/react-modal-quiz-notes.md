# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  `The <dialog> HTML element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.`

- How do you show and hide a modal dialog?
  `showDialog() and close() methods`

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  `props, the ref onClick events won't be seen from parent to child.`

- How do you call the dialog element's functions in React?
  `By using the useRef hook and giving dialog a ref.`

- How can you render nested components or JSX elements in React?
  `children prop`

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
