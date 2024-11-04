# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  `To get output from our code and see what's inside variables.`

- What is the purpose of events and event handling?
  `Events are signals that indicate something has happened within a system, like a user clicking a button, and event handling is the mechanism that allows a program to respond to these events by executing specific code (called an event handler) when they occur, creating dynamic and interactive user experiences.`

- Are all possible parameters required to use a JavaScript method or function?
  `No, not all parameters are required when calling a JavaScript function or method.`

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  `An event listener.`

- What is a callback function?
  `A callback function is a function passed into another function as an argument.`

- What object is passed into an event listener callback when the event fires?
  `Callback function`

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  `event.target refers to the element that is responsible for firing the event. If someone's not sure about it they can log it out to console.`

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  `The first passes the function definition to addEventListener. The second actually calls the function.`

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
