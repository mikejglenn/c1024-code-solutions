# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  `They are used to manage asynchronous operations.`

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  `With .then and .catch any code that follows the creation of the Promise will execute before the callback function attached to the Promise is executed. On the other hand, with async/await, the await keyword causes the JavaScript engine to pause the execution of the async function until the Promise is resolved or rejected.`

- When do you use `async`?
  `At the start of a function definition.`

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  `Use await when working with Promises and you need to pause execution for the result. Don't use await for synchronous functions, values, or operations that can run independently. If you await a synchronous function, it’s wrapped in a resolved Promise, which is unnecessary.`

- How do you handle errors with `await`?
  `try/catch block`

- What do `try`, `catch` and `throw` do? When do you use them?
  `The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it. Use the throw statement to throw an exception.`

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  `If the Promise resolves successfully and you don’t use await, the operation proceeds in the background, but you won't have immediate access to its resolved value. The code continues executing without waiting for the Promise to complete.`

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  `async/await - more sequential and very clean`

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
