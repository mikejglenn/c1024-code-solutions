# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  `To get output from our code and see what's inside variables.`

- What is a "model"?
  `It is an interface to the web page document.`

- Which "document" is being referred to in the phrase Document Object Model?
  `The web page.`

- What is the word "object" referring to in the phrase Document Object Model?
  `The objects are the content, structure, and styles of the web page.`

- What is a DOM Tree?
  `In the context of an HTML document, the DOM represents each element (tags, attributes, text, etc) as a node in the tree. It's referencing the tree-like structure of HTML elements. Each web page is modeled as a tree of objects, with the HTML document as the root, and other elements (like <body>, <header>, <div>, etc.) as branches and leaves. Each element in the page is represented as a node in the DOM tree.`

- Give two examples of `document` methods that retrieve a single element from the DOM.
  `querySelector() and getElementById()`

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  `querySelectorAll()`

- Why might you want to assign the return value of a DOM query to a variable?
  `Each time we query the DOM for an element reference, it requires the interface to search through all of the HTML so that it can find the elements we are looking for.
Because of this, it is generally a best practice to store DOM element references in a variable. Once the reference has been saved in a variable, accessing the element again does not require another search.`

- What `console` method allows you to inspect the properties of a DOM element object?
  `console.dir()`

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  `The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.`

- What does `document.querySelector()` take as its argument and what does it return?
  `For its argument it takes a specified CSS selector and it returns the first matched element.`

- What does `document.querySelectorAll()` take as its argument and what does it return?
  `For its argument it takes a specified CSS selector and it returns a NodeList of all matched elements.`

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
