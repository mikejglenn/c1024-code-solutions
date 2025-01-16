# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  `In React, "context" is a mechanism that allows you to pass data through a component tree without explicitly passing props at every level, essentially enabling you to share data between components that are not directly related to each other, without the need for "prop drilling" through multiple levels of the component hierarchy.`

- What values can be stored in context?
  `any valid JavaScript value`

- How do you create context and make it available to the components?
  `import createContext, createContext(defaultCartValue), context value on .Provider of component`

- How do you access the context values?
  `import useContext, call useContext on context, destructure`

- When would you use context? (in addition to the best answer: "rarely")
  `avoid prop drilling, global/app wide state, theming, managing complex state`

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
