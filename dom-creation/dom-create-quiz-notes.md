# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  `No`

- How do you add an element as a child to another element?
  `appendChild() method`

- What do you pass as the arguments to the `element.setAttribute()` method?
  `The attribute and its value.`

- What steps do you need to take in order to insert a new element into the page?
  `First query the DOM for the correct element to add the newly created HTML collection to and store it in a variable. Then append the HTML collection stored in the variable to the proper location on the DOM.`

- What is the `textContent` property of an element object for?
  `The textContent property of the Node interface represents the text content of the node and its descendants.`

- Name two ways to set the `class` attribute of a DOM element.
  `User the setter functionality of the className property or use the setAttribute() method with 'class' as the attribute to set.`

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  `Code reusability (being able to use the same code to create similar objects multiple times without rewriting it) and improved code readability (by encapsulating a specific task into a named function, making your code easier to understand and maintain.`

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
