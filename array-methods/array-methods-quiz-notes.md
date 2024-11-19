# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do? `forEach() executes the callback function once for each array element`
  - What should the callback function do? `Function to execute on each element, taking three arguments - currentValue, index, array`
  - What is `Array.forEach` useful for? `The typical use case is to execute side effects at the end of a chain.`
- `Array.map`:
  - What does `Array.map` do? `The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.`
  - What should the callback function return? `A new array with each element being the result of the callback function.`
  - What is `Array.map` useful for? `map() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.`
- `Array.find`:
  - What does `Array.find` do? `The find() method returns the value of the first element in the provided array that satisfies the provided testing function.`
  - What should the callback function return? `The value of the first element in the array that satisfies the provided testing function; otherwise, undefined.`
  - What is `Array.find` useful for? `find() executes the callback function once for each index of the array until it finds one where callback returns a truthy value. If such an element is found, find() immediately returns the value of that element. Otherwise, find() returns undefined.`
- `Array.filter`:
  - What does `Array.filter` do? `The filter() method creates a new array with all elements that pass the test implemented by the provided function.`
  - What should the callback function return? `A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.`
  - What is `Array.filter` useful for? `filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.`

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
