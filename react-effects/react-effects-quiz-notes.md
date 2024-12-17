# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  `React takes the JSX returned by render() and creates the corresponding DOM nodes. These nodes are then inserted into the DOM tree at the specified location.`

- What is a React Effect?
  `Effects let you “step outside” of React and synchronize your components with some external system.`

- When should you use an Effect and when should you not use an Effect?
  `Use useEffect when you need to interact with something outside of React's rendering cycle. If you can achieve the same result by manipulating props, state, or event handlers directly within the component, you likely don't need useEffect.`

- When do Effects run?
  `Effects run after every render, including the initial render. This means that whenever a component updates and re-renders, any effects defined within that component will be executed.`

- What function is used to declare an Effect?
  `useEffect hook`

- What are Effect dependencies and how do you declare them?
  `"Effect dependencies" refers to the array of variables or values that a useEffect hook relies on, which tells React when to re-run the effect; you declare them by passing this dependency array as the second argument to the useEffect hook, listing within it any state variables, props, or other values from the component scope that the effect depends on to function correctly.`

- Why would you want to clean up from an Effect?
  `Cleaning up side effects in React is a method of removing side effects that are no longer required. This, in turn, avoids memory leaks, which occur when your program or application attempts to perform an unnecessary operation or update a state memory location that no longer exists.`

- How do you clean up from an Effect?
  `To clean up from an effect in React, you simply return a cleanup function from within the useEffect hook; this function will be called by React automatically when the component is about to unmount or when the dependencies in the effect array change, allowing you to perform necessary actions like removing event listeners, canceling network requests, or clearing timeouts to prevent memory leaks.`

- When does the cleanup function run?
  `When the component unmounts and when the dependency array changes.`

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
