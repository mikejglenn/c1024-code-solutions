# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?

```
Scope is determined during lexical analysis, also known as the compilation phase, which happens before the code is actually executed. This means that the scope of a variable is determined by where it is declared in the code, not where it is called. When JavaScript creates a function reference, it encloses the current variable scope into that function reference.
```

- What allows JavaScript functions to "remember" variables from their surroundings?

```
In JavaScript, the concept of "closures" allows functions to "remember" variables from their surrounding environment, also known as their outer scope, even after the outer function has finished executing; this is because functions in JavaScript carry a reference to the lexical environment where they were created, which includes all the variables accessible at that time.
```

- What values does a closure contain?

```
In JavaScript, a closure contains:
1. The function itself: This is the inner function that forms the closure.
2. References to variables in its lexical environment: These are the variables that were in scope when the closure was created, even if the outer function has finished executing.
Importantly, a closure doesn't store the actual values of these variables. Instead, it stores references to them. This means that if the value of a variable changes in the outer scope, the closure will access the updated value.
```

- When is a closure created?

```
A closure is created when a function is defined inside another function, and the inner function references variables from the outer function's scope, allowing it to access those variables even after the outer function has finished executing; essentially, the inner function "closes over" the outer function's environment.
```

- How can you tell if a function will be created with a closure?

```
A function is created with a closure when it is defined inside another function and attempts to access variables from the outer function's scope, meaning it "captures" those variables even after the outer function has finished executing; essentially, you can identify a closure by seeing a function defined within another function where the inner function uses variables from the outer scope.
```

- In React, what is one important case where you need to know if a closure was created?

```
In React, a crucial scenario where understanding closures is important is when dealing with asynchronous operations like API calls within a component, as closures ensure that the function retains the correct state values (like props) from the time it was created, even if the component re-renders with updated props, preventing potential "stale closure" issues where the function might reference outdated data from a previous render.
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
