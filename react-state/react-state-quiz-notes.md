# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  `Hooks are special functions that allow components to have access to state and other React features`

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

```
The function name must start with use followed by an uppercase letter
Hooks can only be called by React components and other hooks
All hooks in a component must always be called at the top level of a component, and in the same order
```

- What is the purpose of state in React?
  `State in React is a component's "memory", or data that a component saves so it can modify its output. It is what allows React to create dynamic components that have the ability to respond to user input and update what is being displayed to the DOM based on user interactions or variable value changes.`

- Why can't we just maintain state in a local variable?
  `When a React component is rendered, its component function gets called. Therefore, new local variables will be allocated for it. Those variables will have no relation to previous invocations of that component function, so all prior local variable data is lost.`

- What two actions happen when you call a `state setter` function?
  `Update the value of the current state and re-render our component with the next state value.`

- When does the local `state variable` get updated with the new value?
  `After the component is re-rendered.`

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
