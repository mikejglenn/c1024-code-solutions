# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  `fetch`

- What two things need to be done to properly handle HTTP request errors? Why?
  `async/await and error handling. might not get response. might get a response of an error. real answer: try/catch and .ok (200 range status codes)`

- How can `useEffect` be used to load data for a component?
  `async function inside useEffect calls data for component`

- How do you use `useEffect` to load component data just once when the component mounts?
  `empty dependency array`

- How do you use `useEffect` to load component data every time the data key changes?
  `have a dependency in the dependency array`

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  `React Query and Vercel SWR`

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
