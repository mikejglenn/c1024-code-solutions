# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React component?
  `Components in React can be thought of as functions that typically take in data in the form of a props object, and use that data to create reusable UI elements that contain the HTML, CSS, and JavaScript necessary to provide all the functionality for that portion of the website.`

- How do you define a component in React?
  `A function component is a simple JavaScript function that returns JSX (JavaScript XML), which represents the component's output.`

- How is a component "rendered" (made visible on the browser page)?

```In React, a component is rendered (made visible on the browser page) through the following steps:

1. Render Phase:
JSX to JavaScript:
The component's JSX code is transformed into plain JavaScript objects representing the desired UI structure.

Virtual DOM:
React creates a virtual representation of the DOM (Document Object Model), called the Virtual DOM. This is a lightweight in-memory representation of the actual DOM.

Diffing:
When a component's state or props change, React re-renders the component and creates a new Virtual DOM tree. It then compares this new tree with the previous one to identify the differences (diffing algorithm).

Reconciliation:
Based on the diffing results, React determines the minimal set of changes needed to update the actual DOM efficiently.

2. Commit Phase:
DOM Updates: React applies the identified changes to the real DOM, updating the browser's display. This involves adding, removing, or modifying DOM nodes as necessary.

In Summary:
React components describe what the UI should look like based on their props and state.
React maintains a virtual representation of the DOM, which is used to efficiently update the actual DOM when changes occur.
The ReactDOM library is responsible for interacting with the browser's DOM and rendering the React components.
```

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
