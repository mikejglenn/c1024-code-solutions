# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  `post, get, put, delete. no, server is not required to implement this convention.`

- What is Express middleware?
  `Express maps routes to functions using what they refer to as middleware, which is a function that fulfills the requested action.`

- What is Express middleware useful for?
  `Handling and routing http requests with different http methods.`

- How do you mount a middleware with an Express application?
  `Each of the app.METHOD methods will mount middleware that responds to requests that match the specified HTTP method and path.`

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  `req (request object) and res (response object)`

- How do you specify and retrieve route parameters?
  `They are specified in the route path by prefixing the identifier name with : and retrieved from the req.params object.`

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
