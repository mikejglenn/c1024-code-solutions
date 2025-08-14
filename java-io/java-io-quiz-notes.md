# java-io-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is Java Input/Output used for?
`Java Input/Output (I/O) is used for processing input and generating output in Java programs. It provides a framework for interacting with various external data sources and destinations.`

- What is the difference between `java.io` and `java.nio`?
`nio stands for "New I/O" and java.nio supercedes much of java.io, but not all! (One notable exception is java.io.IOException, which is thrown by many of the nio methods.) It is not uncommon in I/O applications to import from both packages.`

- What is an InputStream?
`An InputStream is an abstract class in Java that serves as the superclass for all classes representing an input stream of bytes. It provides a fundamental mechanism for reading raw byte-based data from various sources.`

- What is an OutputStream?
`An OutputStream is an abstract class in Java that serves as the superclass for all classes representing an output stream of bytes. It is a fundamental component of Java's Input/Output (I/O) system, providing a standardized way to write data from a Java application to a destination.`

- What is a good way to create Input/Output streams for a file?
`Create stream objects and connect them to the file. Files.newInputStream(path) and Files.newOutputStream(path)`

- What is the best way to make sure your streams are always closed when you are finished with them?

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
