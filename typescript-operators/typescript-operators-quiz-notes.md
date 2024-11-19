# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  `&& can check for truthy values and take action based on those checks.`
  `|| can set default values or take alternative actions when variables hold falsy values.`

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  `The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.`
  `The logical OR expression is evaluated left to right, it is tested for possible "short-circuit" evaluation using the following rule: (some truthy expression) || expr is short-circuit evaluated to the truthy expression. Short circuit means that the expr part above is not evaluated, hence any side effects of doing so do not take effect (e.g., if expr is a function call, the calling never takes place). This happens because the value of the operator is already determined after the evaluation of the first operand.`

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  `Handles cases where variables might be null or undefined, providing a reliable way to set default values without the pitfalls of logical OR || with falsy values like 0 or ''.`

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  `The ternary operator will be applied for concise conditional expressions, simplifying small if/else blocks into single-line ternary operations.`

- What is the `?.` (optional chaining) operator? When would you use it?
  `Used to safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties.`

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  `Used to clone or merge objects and arrays.`

- What data types can be spread into an array? Into an object?
  `Allows an iterable such as an array or a string to be expanded in places where zero or more arguments or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.`

- How does spread syntax differ from rest syntax?
  `Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.`

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
